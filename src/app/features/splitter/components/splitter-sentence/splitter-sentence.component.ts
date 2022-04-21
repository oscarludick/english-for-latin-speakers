import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-splitter-sentence',
  templateUrl: './splitter-sentence.component.html',
  styleUrls: ['./splitter-sentence.component.scss'],
  host: {
    class: 'app-splitter-sentence',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitterSentenceComponent {
  @Input()
  label!: string;

  @Input()
  sentence!: string;
}
