import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Program, ModelFilter } from '../models';

@Injectable()
export class ProgramsService {
  readonly routerPath = '/programs';

  constructor(
    private apiService: ApiService
  ) {}

  query(filter: ModelFilter = {}): Observable<Program[]> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    /* tslint:disable:no-string-literal */
    if (filter.startDate) {
      params['startDate'] = filter.startDate.toISOString();
    }
    if (filter.startDate) {
      params['endDate'] = filter.endDate.toISOString();
    }
    /* tslint:enable:no-string-literal */

    return this.apiService.get<Program[]>(this.routerPath, new HttpParams({ fromObject: params }));
  }

  get(id: number): Observable<Program> {
    return this.apiService.get<Program>(`${this.routerPath}/${id}`);
  }

  // Should not be allowed
  delete(id: number): Observable<{}> {
    return this.apiService.delete(`${this.routerPath}/${id}`);
  }

  // Should not be allowed
  save(program: Program): Observable<Program> {
    if (program.id) {
      return this.apiService.put<Program>(`${this.routerPath}/${program.id}`, program);
    } else {
      return this.apiService.post<Program>(this.routerPath, program);
    }
  }
}
