import { NgModule } from '@angular/core';

import { PlaylistComponent } from './playlist.component';
import { PlaylistRoutingModule } from './playlist-routing.module';

@NgModule({
  declarations: [
    PlaylistComponent,
  ],
  imports: [
    PlaylistRoutingModule,
  ]
})
export class PlaylistModule { }
