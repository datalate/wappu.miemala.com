# -*- coding: utf-8 -*-
import argparse
import os
import re
import datetime
import json

nyt_soi_format = r'^-{bot_name}:{channel}- [n|N]yt soi: (.+?) - (.+?)[\s]*$'
#nyt_esiintyy_format = r'^-{bot_name}:{channel}- [n|N]yt esiintyy: (.+?)[\s]*$'
day_changed_format = '%a %b %d %Y'
log_opened_format = '%a %b %d %H:%M:%S %Y'
tz = datetime.timezone(datetime.timedelta(hours=3))


class Track:
    def __init__(self, artist, title, played_at):
        self.__artist = artist
        self.__title = title
        self.__played_at = played_at

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
        self.__nyt_soi = nyt_soi_format.format(bot_name=self.__bot_name, channel=self.__channel)
        self.__nyt_esiintyy = nyt_soi_format.format(bot_name=self.__bot_name, channel=self.__channel)
        self.__current_date = None

    def parse_file(self, path):
        tracks = []

        with open(path, encoding='utf8', errors='replace') as fp:
            for line in fp:
                track = self.__parse_line(line.rstrip())
                if track:
                    tracks.append(track)

        return tracks

    def __parse_line(self, line):
        if line.startswith('---'):
            split = line.split(' ', 3)
            if line.find('Day changed') != -1:  # --- Day changed Wed Apr 22 2015
                date = datetime.datetime.strptime(split[3], day_changed_format)
                self.__current_date = date
            elif line.find('Log opened') != -1:  # --- Log opened Fri Feb 06 10:05:05 2015
                dt = datetime.datetime.strptime(split[3], log_opened_format)
                self.__current_date = dt.date()
        else:
            split = line.split(' ', 1)
            result = re.match(self.__nyt_soi, split[1])
            if result:
                time = split[0].split(':')
                dt = datetime.datetime(
                    self.__current_date.year, self.__current_date.month, self.__current_date.day,
                    int(time[0]), int(time[1]), tzinfo=tz)
                return Track(result.group(1), result.group(2), dt)

        return None


class JSONTrackEncoder(json.JSONEncoder):
    def default(self, obj):
        if hasattr(obj, '__json__'):
            return obj.__json__()
        return super().default(obj)


def main():
    args = argparse.ArgumentParser(description='IRC log parser for wappu')
    args.add_argument('LogFile', metavar='log', type=str, help='The log file to parse')

    parsed = args.parse_args()
    file_path = parsed.LogFile

    if not os.path.isfile(file_path):
        print('File doesn\'t exist')
        exit()

    parser = Parser()
    tracks = parser.parse_file(file_path)

    encoder = JSONTrackEncoder(ensure_ascii=False, indent=2)
    result = encoder.encode(tracks)
    with open('output.json', 'w', encoding='utf8', errors='replace') as fp:
        fp.write(result)