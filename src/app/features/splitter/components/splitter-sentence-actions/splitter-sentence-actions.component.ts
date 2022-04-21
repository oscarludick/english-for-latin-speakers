import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Speech } from '@modules/speech';

import { SentencesService } from '@core/services';

@Component({
  selector: 'app-splitter-sentence-actions',
  templateUrl: './splitter-sentence-actions.component.html',
  styleUrls: ['./splitter-sentence-actions.component.scss'],
  host: {
    class: 'app-splitter-sentence-actions',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitterSentenceActionsComponent {
  sentence$ = this._sentenceService.sentence$;

  constructor(
    private readonly _sentenceService: SentencesService,
    private readonly _speechService: Speech
  ) {}

  onPlayAudio(text: string): boolean {
    this._speechService.speak(text);
    return false;
  }
}
