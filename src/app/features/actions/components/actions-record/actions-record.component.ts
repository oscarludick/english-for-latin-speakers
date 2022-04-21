import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Speech } from '@modules/speech';

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

  recording$ = this._speechService.recording$;

  constructor(private readonly _speechService: Speech) {}

  onRecord(isRecording: boolean): boolean {
    if (isRecording) {
      this._speechService.stop();
    } else {
      this._speechService.start();
    }
    return false;
  }
}
