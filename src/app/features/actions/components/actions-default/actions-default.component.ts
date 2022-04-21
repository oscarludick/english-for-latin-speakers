import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-actions-default',
  templateUrl: './actions-default.component.html',
  styleUrls: ['./actions-default.component.scss'],
  host: {
    class: 'app-actions-default',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsDefaultComponent {}
