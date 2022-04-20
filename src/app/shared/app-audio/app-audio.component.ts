import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './app-audio.component.html',
  styleUrls: ['./app-audio.component.scss'],
  host: {
    class: 'app-audio',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppAudioComponent {
  @Input()
  audio!: string;

  @Input()
  format = 'audio/mp3';

  @Input()
  message = "Browser doesn't support audio HTML5.";
}
