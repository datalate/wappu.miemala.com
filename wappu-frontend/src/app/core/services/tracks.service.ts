import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Track, TrackFilter } from '../models';

@Injectable()
export class TracksService {
  readonly routerPath = '/tracks';

  constructor(
    private apiService: ApiService
  ) {}

  query(filter: TrackFilter = {}): Observable<Track[]> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(filter)
      .forEach((key) => {
        params[key] = filter[key];
      });

    return this.apiService.get<Track[]>(this.routerPath, new HttpParams({ fromObject: params }));
  }

  get(id: number): Observable<Track> {
    return this.apiService.get<Track>(`${this.routerPath}/${id}`);
  }

  // Should not be allowed
  delete(id: number): Observable<{}> {
    return this.apiService.delete(`${this.routerPath}/${id}`);
  }

  // Should not be allowed
  save(track: Track): Observable<Track> {
    if (track.id) {
      return this.apiService.put<Track>(`${this.routerPath}/${track.id}`, track);
    } else {
      return this.apiService.post<Track>(this.routerPath, track);
    }
  }
}
