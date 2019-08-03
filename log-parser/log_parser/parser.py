# -*- coding: utf-8 -*-

import argparse
import sys
import os
import re
import datetime
import json

nyt_soi_notice_format = r'^-{bot_name}:{channel}- [n|N]yt soi: (.+?)(?: - (.+?))?[\s]*$'
nyt_soi_privmsg_format = r'^<.{bot_name}> [n|N]yt soi: (.+?)(?: - (.+?))?[\s]*$'
#nyt_esiintyy_format = r'^-{bot_name}:{channel}- [n|N]yt esiintyy: (.+?)[\s]*$'
day_changed_format = '%a %b %d %Y'
log_opened_format = '%a %b %d %H:%M:%S %Y'
tz = datetime.timezone(datetime.timedelta(hours=3))


class Track:
    def __init__(self, title, played_at, artist=None):
        self.__title = title
        self.__played_at = played_at
        self.__artist = artist

    def artist(self):
        return self.__artist

    def title(self):
        return self.__title

    def played_at(self):
        return self.__played_at

    def __str__(self):
        return '{}: {} - {}'.format(self.__played_at, self.__artist, self.__title)

    def __json__(self):
        return {'playedAt': self.__played_at.isoformat(), 'artist': self.__artist, 'title': self.__title}


class Parser:
    def __init__(self):
        self.__bot_name = 'ShoutBot'
        self.__channel = '#wappuradio'
        self.__current_date = datetime.datetime.now(tz=tz)

        self.__pattern_nyt_soi = re.compile(nyt_soi_notice_format.format(
            bot_name=self.__bot_name,
            channel=self.__channel))

    def parse_input(self, input_p):
        tracks = []

        if isinstance(input_p, list) and len(input_p) > 0:
            input_p = input_p[0]

        while 1:
            try:
                line = input_p.readline()
            except KeyboardInterrupt:
                break

            if not line:
                break

            track = self.__parse_line(line.rstrip())
            if track:
                print(track)
                tracks.append(track)

        return tracks

    def __parse_line(self, line):
        if not line:
            return None

        if line.startswith('---'):
            parsed_line = line.split(' ', 3)
            if len(parsed_line) < 4:
                return None

            try:
                if line.find('Day changed') != -1:  # --- Day changed Wed Apr 22 2015
                    date = datetime.datetime.strptime(parsed_line[3], day_changed_format)
                    self.__current_date = date
                elif line.find('Log opened') != -1:  # --- Log opened Fri Feb 06 10:05:05 2015
                    dt = datetime.datetime.strptime(parsed_line[3], log_opened_format)
                    self.__current_date = dt.date()
            except ValueError:
                print('{time}: failed parsing date from line \'{line}\''
                      .format(time=datetime.datetime.now(tz=tz), line=line))
        else:
            parsed_line = line.split(' ', 1)  # <timestamp> <rest of the message>
            if len(parsed_line) < 2:
                return None

            result = self.__pattern_nyt_soi.match(parsed_line[1])  # 1: artist (or title if artist is missing), 2: title
            if result:
                parsed_time = parsed_line[0].split(':')  # <hh>:<mm>
                timestamp = datetime.datetime(
                    year=self.__current_date.year,
                    month=self.__current_date.month,
                    day=self.__current_date.day,
                    hour=int(parsed_time[0]),
                    minute=int(parsed_time[1]),
                    tzinfo=tz)
                if result.group(2):
                    return Track(artist=result.group(1), title=result.group(2), played_at=timestamp)
                else:
                    track = Track(title=result.group(1), played_at=timestamp)  # artist/title is missing
                    print('{time}: artist missing for title \'{title}\''.format(time=timestamp, title=track.title()))
                    return track
        return None


class JSONTrackEncoder(json.JSONEncoder):
    def default(self, obj):
        if hasattr(obj, '__json__'):
            return obj.__json__()
        return super().default(obj)


def main():
    args = argparse.ArgumentParser(description='IRC log parser for wappu')
    args.add_argument(
        '--input-log', '-i',
        type=argparse.FileType('r', encoding='utf-8', errors='replace'),
        default=sys.stdin,
        nargs='*',
        help='the log file to parse, if empty, stdin is used')

    parsed = args.parse_args()
    if not parsed.input_log:
        print('Error: no input given')
        exit(1)

    parser = Parser()
    tracks = parser.parse_input(parsed.input_log)

    encoder = JSONTrackEncoder(ensure_ascii=False, indent=2)
    result = encoder.encode(tracks)
    with open('output.json', 'w', encoding='utf8', errors='replace') as fp:
        fp.write(result)
