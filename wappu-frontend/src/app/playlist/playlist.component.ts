import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TracksService, ProgramsService } from '../core/services';
import { Radio, Track, Program } from '../core/models';
import { RADIO_EDITIONS, DEFAULT_RADIO } from './shared';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  constructor(
    private tracksService: TracksService,
    private programsService: ProgramsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  tracks: Track[];
  programs: Program[];

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      if (params.radio) {
        const radio = RADIO_EDITIONS.find(edition => edition.id === params.radio);
        if (radio) {
          this.updatePlayed(radio);
          return;
        }
      }

      await this.router.navigate([DEFAULT_RADIO.id], {relativeTo: this.route});
    });
  }

  private updatePlayed(radio: Radio): void {
    this.programsService.query(
      {
        startDate: radio.startAt,
        endDate: radio.endAt
      })
      .toPromise()
      .then((programs: Program[]) => {
        this.programs = programs.sort((a, b) => this.sortByStartAt(a, b, false));
      });

    this.tracksService.query(
      {
        startDate: radio.startAt,
        endDate: radio.endAt
      })
      .toPromise()
      .then((tracks: Track[]) => {
        this.tracks = tracks.sort((a, b) => this.sortByPlayedAt(a, b, false));
      });
  }

  private sortByPlayedAt(a: Track, b: Track, descending = true): number {
    if (descending) {
      return b.playedAt.getTime() - a.playedAt.getTime();
    } else {
      return a.playedAt.getTime() - b.playedAt.getTime();
    }
  }

  private sortByStartAt(a: Program, b: Program, descending = true): number {
    if (descending) {
      return b.startAt.getTime() - a.startAt.getTime();
    } else {
      return a.startAt.getTime() - b.startAt.getTime();
    }
  }

  getEditions(): string[] {
    return RADIO_EDITIONS.map(radio => radio.id);
  }

  getTracksForProgram(program: Program): Track[] {
    if (!program || !this.tracks) {
      return [];
    }

    return this.tracks.filter(track => track.playedAt >= program.startAt && track.playedAt < program.endAt);
  }
}
