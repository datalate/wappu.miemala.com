import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Program, ModelFilter } from '../models';

@Injectable()
export class ProgramsService {
  readonly routerPath = '/programs';

  constructor(private apiService: ApiService) {}

  public query(filter: ModelFilter = {}): Observable<Program[]> {
    const params: any = {};

    if (filter.startDate) {
      params.startDate = filter.startDate.toISOString();
    }
    if (filter.startDate) {
      params.endDate = filter.endDate.toISOString();
    }

    return this.apiService.get<Program[]>(this.routerPath, params);
  }

  public get(id: number): Observable<Program> {
    return this.apiService.get<Program>(`${this.routerPath}/${id}`);
  }

  // Should not be allowed
  public delete(id: number): Observable<{}> {
    return this.apiService.delete(`${this.routerPath}/${id}`);
  }

  // Should not be allowed
  public save(program: Program): Observable<Program> {
    if (program.id) {
      return this.apiService.put<Program>(`${this.routerPath}/${program.id}`, program);
    } else {
      return this.apiService.post<Program>(this.routerPath, program);
    }
  }
}
