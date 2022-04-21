import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { catchError, Observable, of, pipe } from 'rxjs';

import { Api } from './api.abstract';

import { APP_BASE_URL } from './api-base-url.token';

@Injectable()
export class ApiService extends Api {
  private _formatError = pipe(
    catchError<any, any>((e) => {
      console.warn(e);
      return of(null);
    })
  );

  constructor(
    @Inject(APP_BASE_URL) private readonly _baseURL: string,
    private readonly _httpClient: HttpClient
  ) {
    super();
  }

  get<T>(path: string, params?: HttpParams): Observable<T> {
    return this._httpClient
      .get(this._appendBase(path), {
        params,
      })
      .pipe(this._formatError) as Observable<T>;
  }

  private _appendBase(path: string): string {
    if (path.match(/http|https/)) {
      return path;
    } else {
      return encodeURI(`${this._baseURL}/${path}`);
    }
  }
}
