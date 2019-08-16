import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistComponent } from './playlist.component';
import { LATEST_RADIO } from './shared';

const routes: Routes = [
  {
    path: ':radio',
    component: PlaylistComponent,
  },
  {
    path: '**',
    redirectTo: LATEST_RADIO,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule {}
