import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { JsonDateInterceptor } from './interceptors';

import {
  ApiService,
  TracksService
} from './services';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JsonDateInterceptor, multi: true },
    ApiService,
    TracksService,
  ]
})
export class CoreModule { }
