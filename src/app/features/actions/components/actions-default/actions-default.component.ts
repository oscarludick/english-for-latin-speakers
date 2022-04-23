import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';

import { TextTemplate } from '@core/interfaces';
import { APP_TEXT_TEMPLATE } from '@core/tokens';

type AppActions = TextTemplate['app']['actions'];

@Component({
  selector: 'app-actions-default',
  templateUrl: './actions-default.component.html',
  styleUrls: ['./actions-default.component.scss'],
  host: {
    class: 'app-actions-default',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsDefaultComponent {
  textTemplate!: AppActions;

  constructor(
    @Inject(APP_TEXT_TEMPLATE) private readonly _textTemplate: TextTemplate
  ) {
    this.textTemplate = this._textTemplate.app.actions;
  }
}
