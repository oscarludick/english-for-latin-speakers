import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  host: {
    class: 'app-actions',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsComponent {}
