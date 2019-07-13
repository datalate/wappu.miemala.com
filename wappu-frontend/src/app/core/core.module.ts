import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ApiService,
  TracksService
} from './services';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ApiService,
    TracksService,
  ]
})
export class CoreModule { }
