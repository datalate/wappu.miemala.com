import { Component, Input } from '@angular/core';

import { Track, Program } from '../../core/models';

@Component({
  selector: 'app-playlist-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent {
  @Input() program: Program;
  @Input() tracks: Track[];
}
