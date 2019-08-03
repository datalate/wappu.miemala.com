# -*- coding: utf-8 -*-

import argparse
import sys
import re
import datetime
import json
import sqlite3

nyt_soi_notice_format = r'^-{bot_name}:{channel}- [n|N]yt soi: (.+?)(?: - (.+?))?[\s]*$'
nyt_soi_privmsg_format = r'^<.{bot_name}> [n|N]yt soi: (.+?)(?: - (.+?))?[\s]*$'
# nyt_esiintyy_format = r'^-{bot_name}:{channel}- [n|N]yt esiintyy: (.+?)[\s]*$'
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
        return '{playedAt:%x %X}: {artist} - {title}'.format(
            playedAt=self.__played_at, artist=self.__artist, title=self.__title)

    def __json__(self):
        return {'playedAt': self.__played_at.isoformat(), 'artist': self.__artist, 'title': self.__title}


class Parser:
    def __init__(self):
        self.__bot_name = 'ShoutBot'
        self.__channel = '#wappuradio'
        self.__current_date = datetime.datetime.now(tz=tz)

        # self.__pattern_nyt_soi = re.compile(nyt_soi_notice_format.format(
        #     bot_name=self.__bot_name,
        #     channel=self.__channel))

        self.__pattern_nyt_soi = re.compile(nyt_soi_privmsg_format.format(bot_name=self.__bot_name))

    def parse_input(self, input_p, callback=None, c_args=()):
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
                tracks.append(track)
                if callback:
                    callback(track, *c_args)

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
            except ValueError as e:
                print('{time:%c}: failed parsing date from line \'{line}\': {error}'
                      .format(time=datetime.datetime.now(tz=tz), line=line, error=str(e)))
        else:
            parsed_line = line.split(' ', 1)  # <timestamp> <rest of the message>
            if len(parsed_line) < 2:
                return None

            result = self.__pattern_nyt_soi.match(parsed_line[1])  # 1: artist (or title if artist is missing), 2: title
            if result:
                now = datetime.datetime.now(tz=tz)

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
                    print('{time:%c}: artist missing for track: {track}'.format(time=now, track=track))
                    return track
        return None


class JSONTrackEncoder(json.JSONEncoder):
    def default(self, obj):
        if hasattr(obj, '__json__'):
            return obj.__json__()
        return super().default(obj)


def db_write(track, conn, table_name):
    now = datetime.datetime.now(tz=tz)

    print('{time:%c}: writing track to database: {track}'.format(time=now, track=track))

    try:
        with conn:
            conn.execute('INSERT INTO {table} ("artist", "title", "playedAt", "createdAt", "updatedAt")'
                         'VALUES (:artist, :title, :playedAt, :createdAt, :updatedAt)'
                         .format(table=table_name),
                         {
                             "artist": track.artist(),
                             "title": track.title(),
                             "playedAt": track.played_at(),
                             "createdAt": now.isoformat(),
                             "updatedAt": now.isoformat()
                         })
    except sqlite3.Error as e:
        print('{time:%c}: transaction failed: {error}'.format(time=now, error=str(e)))
    except UnicodeEncodeError as e:
        print('{time:%c}: encoding failed: {error}'.format(time=now, error=str(e)))


def db_write_many(tracks, conn, table_name):
    now = datetime.datetime.now(tz=tz)
    tracks_data = map(lambda track:
                      (track.artist(), track.title(), track.played_at(), now.isoformat(), now.isoformat()), tracks)

    print('{time:%c}: writing {num_tracks} tracks to database'.format(time=now, num_tracks=len(tracks)))

    try:
        with conn:
            conn.executemany('INSERT INTO {table} ("artist", "title", "playedAt", "createdAt", "updatedAt")'
                             'VALUES (:artist, :title, :playedAt, :createdAt, :updatedAt)'
                             .format(table=table_name),
                             tracks_data)
    except sqlite3.Error as e:
        print('{time:%c}: transaction failed: {error}'.format(time=now, error=str(e)))


def main():
    argparser = argparse.ArgumentParser(description='IRC log parser for wappu')
    argparser.add_argument(
        '--input-log', '-i',
        type=argparse.FileType('r', encoding='utf-8', errors='replace'),
        default=sys.stdin,
        nargs='*',
        help='the log file to parse - if not given, stdin is used')

    output_group = argparser.add_mutually_exclusive_group(required=False)
    output_group.add_argument(
        '--json-out', '-o',
        type=argparse.FileType('w', encoding='utf-8', errors='replace'),
        help='write parsed tracks as JSON')
    output_group.add_argument(
        '--sqlite-db', '-d',
        type=str,
        help='SQLite3 database file')

    argparser.add_argument(
        '--sqlite-table', '-t',
        type=str,
        default='Tracks',
        help='SQLite3 table')

    args = argparser.parse_args()
    if not args.input_log:
        print('Error: no input given')
        exit(1)

    parser = Parser()

    if args.sqlite_db:
        connection = sqlite3.connect(args.sqlite_db)
        if True:
            parser.parse_input(args.input_log, db_write, (connection, args.sqlite_table))
        else:
            tracks = parser.parse_input(args.input_log)
            db_write_many(tracks, connection, args.sqlite_table)
        connection.close()
    elif args.json_out:
        tracks = parser.parse_input(args.input_log)
        print('Writing JSON to \'{file_name}\''.format(file_name=args.json_out.name))
        encoder = JSONTrackEncoder(ensure_ascii=False, indent=2)
        result = encoder.encode(tracks)
        args.json_out.write(result)
    else:
        parser.parse_input(args.input_log, lambda x: print(x))
