import { HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

export abstract class Api {
  abstract get<T>(path: string, params?: HttpParams): Observable<T>;
}
