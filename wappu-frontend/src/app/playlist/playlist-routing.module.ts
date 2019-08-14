import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistComponent } from './playlist.component';
import { DEFAULT_RADIO } from './shared';

const routes: Routes = [
  {
    path: ':radio',
    component: PlaylistComponent,
  },
  {
    path: '**',
    redirectTo: DEFAULT_RADIO.id,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule {}
