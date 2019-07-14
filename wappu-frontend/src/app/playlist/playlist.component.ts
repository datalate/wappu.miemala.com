import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TracksService } from '../core/services';
import { Track } from '../core/models';
import { AVAILABLE_YEARS } from './shared';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  constructor(
    private tracksService: TracksService,
    private route: ActivatedRoute
  ) { }

  private tracks: Track[];

  ngOnInit(): void {
    console.log(AVAILABLE_YEARS);

    this.route.params.subscribe(params => {
      if (params.year) {
        const parsedYear = parseInt(this.route.snapshot.params.year, 10);
        if (!isNaN(parsedYear)) {
          this.updatePlayed(parsedYear);
        }
      }
    });
  }

  private updatePlayed(year: number): void {
    this.tracksService.query(
      {
        startDate: new Date(year, 0),
        endDate: new Date(year + 1, 0)
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
}
