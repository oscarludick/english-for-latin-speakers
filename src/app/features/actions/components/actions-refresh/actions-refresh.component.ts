import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { SentencesService } from '@core/services';

import { ActionsRefreshService } from '@features/actions/services';

@Component({
  selector: 'app-actions-refresh',
  templateUrl: './actions-refresh.component.html',
  styleUrls: ['./actions-refresh.component.scss'],
  host: {
    class: 'app-actions-refresh',
  },
  providers: [ActionsRefreshService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsRefreshComponent {
  @Input()
  activeRefreshText!: string;

  @Input()
  inactiveRefreshText!: string;

  timer$!: Observable<any>;

  interval$!: Observable<number | null>;

  disabled$!: Observable<any>;

  constructor(
    private readonly _sentencesService: SentencesService,
    private readonly _actionsRefreshService: ActionsRefreshService
  ) {
    this.timer$ = this._actionsRefreshService.timer$;
    this.interval$ = this._actionsRefreshService.interval$;
    this.disabled$ = this._actionsRefreshService.disabled$;
  }

  onRefresh(): boolean {
    this._actionsRefreshService.update(true);
    this._sentencesService.update();
    return false;
  }
}
