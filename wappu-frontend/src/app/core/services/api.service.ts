import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public get<T>(path: string, params: any = {}): Observable<T> {
    return this.http.get<T>(
      `${environment.apiBaseUrl}${path}`,
      { params })
      .pipe(catchError(this.formatErrors));
  }

  public put<T>(path: string, obj: T): Observable<T> {
    return this.http.put<T>(
      `${environment.apiBaseUrl}${path}`,
      JSON.stringify(obj)
    ).pipe(catchError(this.formatErrors));
  }

  public post<T>(path: string, obj: T): Observable<T> {
    return this.http.post<T>(
      `${environment.apiBaseUrl}${path}`,
      JSON.stringify(obj)
    ).pipe(catchError(this.formatErrors));
  }

  public delete(path): Observable<{}> {
    return this.http.delete(
      `${environment.apiBaseUrl}${path}`
    ).pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }
}
