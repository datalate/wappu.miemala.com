import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Track, ModelFilter } from '../models';

@Injectable()
export class TracksService {
  readonly routerPath = '/tracks';

  constructor(private apiService: ApiService) {}

  public query(filter: ModelFilter = {}): Observable<Track[]> {
    const params: any = {};

    if (filter.startDate) {
      params.startDate = filter.startDate.toISOString();
    }
    if (filter.startDate) {
      params.endDate = filter.endDate.toISOString();
    }

    return this.apiService.get<Track[]>(this.routerPath, params);
  }

  public get(id: number): Observable<Track> {
    return this.apiService.get<Track>(`${this.routerPath}/${id}`);
  }

  // Should not be allowed
  public delete(id: number): Observable<{}> {
    return this.apiService.delete(`${this.routerPath}/${id}`);
  }

  // Should not be allowed
  public save(track: Track): Observable<Track> {
    if (track.id) {
      return this.apiService.put<Track>(`${this.routerPath}/${track.id}`, track);
    } else {
      return this.apiService.post<Track>(this.routerPath, track);
    }
  }
}
