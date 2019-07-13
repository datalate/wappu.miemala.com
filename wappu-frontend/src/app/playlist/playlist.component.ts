import { Component, OnInit } from '@angular/core';

import { TracksService } from '../core/services';
import { Track } from '../core/models';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  constructor(
    private tracksService: TracksService
  ) { }

  private tracks: Track[];

  ngOnInit(): void {
    this.tracksService.query({})
      .toPromise()
      .then(tracks => { this.tracks = tracks; });
  }
}
