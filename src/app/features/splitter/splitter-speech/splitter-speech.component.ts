import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-splitter-speech',
  templateUrl: './splitter-speech.component.html',
  styleUrls: ['./splitter-speech.component.scss'],
  host: {
    class: 'app-splitter-speech',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitterSpeechComponent {
  @Input()
  speechText!: string;
}
