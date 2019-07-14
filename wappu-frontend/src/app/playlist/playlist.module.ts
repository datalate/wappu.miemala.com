import { NgModule } from '@angular/core';

import { PlaylistComponent } from './playlist.component';
import { PlaylistRoutingModule } from './playlist-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PlaylistComponent,
  ],
  imports: [
    SharedModule,
    PlaylistRoutingModule,
  ]
})
export class PlaylistModule { }
