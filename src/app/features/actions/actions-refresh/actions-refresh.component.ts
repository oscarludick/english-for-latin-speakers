import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';

import { ActionsControlsService } from '../services';

@Component({
  selector: 'app-actions-refresh',
  templateUrl: './actions-refresh.component.html',
  styleUrls: ['./actions-refresh.component.scss'],
  host: {
    class: 'app-actions-refresh',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsRefreshComponent {
  @Input()
  text!: string;

  timer$!: Observable<any>;

  disabled$!: Observable<any>;

  @Output()
  onRefresh = new EventEmitter<void>();

  constructor(readonly actionsControlsService: ActionsControlsService) {
    this.timer$ = actionsControlsService.timer$;
    this.disabled$ = actionsControlsService.disabled$;
  }

  refresh(): boolean {
    this.actionsControlsService.update(true);
    this.onRefresh.emit();
    return false;
  }
}
