import { Inject, Injectable } from '@angular/core';

import {
  BehaviorSubject,
  filter,
  map,
  Observable,
  switchMap,
  timer,
} from 'rxjs';

import { APP_ACTIONS_REFRESH } from '../tokens';

@Injectable()
export class ActionsControlsService {
  private _timerSubject: BehaviorSubject<any> = new BehaviorSubject(true);

  timer$: Observable<any> = this._timerSubject.asObservable();

  disabled$: Observable<any> = this.timer$.pipe(
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
