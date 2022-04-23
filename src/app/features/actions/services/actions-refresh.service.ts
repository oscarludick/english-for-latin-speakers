import { Inject, Injectable } from '@angular/core';

import {
  BehaviorSubject,
  filter,
  interval,
  map,
  of,
  switchMap,
  timer,
} from 'rxjs';

import { APP_ACTIONS_REFRESH } from '@features/actions/tokens';

@Injectable()
export class ActionsRefreshService {
  private _timerSubject: BehaviorSubject<any> = new BehaviorSubject(true);

  timer$ = this._timerSubject.asObservable();

  interval$ = this._timerSubject.asObservable().pipe(
    switchMap((value) => (value ? interval(1000) : of(null))),
    map((i) => (i ? this._refreshTimer / 1000 - (i + 1) : i))
  );

  disabled$ = this.timer$.pipe(
    filter((value) => value),
    switchMap(() => timer(this._refreshTimer)),
    map((value) => {
      this.update(false);
      return !!value;
    })
  );

  constructor(
    @Inject(APP_ACTIONS_REFRESH) private readonly _refreshTimer: number
  ) {}

  update(value: boolean) {
    this._timerSubject.next(value);
  }
}
