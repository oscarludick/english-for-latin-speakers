import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-splitter-audio',
  templateUrl: './splitter-audio.component.html',
  styleUrls: ['./splitter-audio.component.scss'],
  host: {
    class: 'app-splitter-audio',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitterAudioComponent {
  @Input()
  title!: string;

  @Input()
  phonetics!: { audio: string; text: string }[];

  @Input()
  display!: boolean;

  @Output()
  onHide = new EventEmitter<void>();
}
