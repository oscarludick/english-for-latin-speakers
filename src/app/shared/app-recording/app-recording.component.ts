import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-recording',
  templateUrl: 'app-recording.component.html',
  styleUrls: ['app-recording.component.scss'],
  host: {
    class: 'app-recording',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppRecordingComponent {
  @Input()
  text!: string;

  @Input()
  isRecording!: boolean;
}
