import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistComponent } from './playlist.component';
import { DEFAULT_YEAR } from './shared';

const routes: Routes = [
  {
    path: ':year',
    component: PlaylistComponent,
  },
  {
    path: '**',
    redirectTo: `${DEFAULT_YEAR.toString()}`,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule {}
