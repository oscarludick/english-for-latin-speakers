import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-actions-record',
  templateUrl: './actions-record.component.html',
  styleUrls: ['./actions-record.component.scss'],
  host: {
    class: 'app-actions-record',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsRecordComponent {
  @Input()
  startRecordingText!: string;

  @Input()
  stopRecordingText!: string;

  @Input()
  recording!: boolean;

  @Output()
  onRecord = new EventEmitter<boolean>();

  record(value: boolean): boolean {
    this.onRecord.emit(value);
    return false;
  }
}
