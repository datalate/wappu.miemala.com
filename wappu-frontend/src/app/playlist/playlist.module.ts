import { NgModule } from '@angular/core';

import { PlaylistComponent } from './playlist.component';
import { PlaylistRoutingModule } from './playlist-routing.module';
import { ProgramComponent } from './program/program.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PlaylistComponent,
    ProgramComponent,
  ],
  imports: [
    SharedModule,
    PlaylistRoutingModule,
  ]
})
export class PlaylistModule {
}
