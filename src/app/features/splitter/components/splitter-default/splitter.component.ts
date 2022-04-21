import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

import { Observable, tap } from 'rxjs';

import { Speech } from '@modules/speech';

import { Dictionary } from '@core/models';
import { DictionaryService, SentencesService } from '@core/services';

@Component({
  selector: 'app-splitter',
  templateUrl: './splitter.component.html',
  styleUrls: ['./splitter.component.scss'],
  host: {
    class: 'app-splitter',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitterComponent {
  sentence$!: Observable<string>;

  result$!: Observable<{ result: string | null }>;

  words$!: Observable<Dictionary[]>;

  constructor(
    private readonly _speechService: Speech,
    private readonly _sentencesService: SentencesService,
    private readonly _dictionaryService: DictionaryService,
    private readonly _cdr: ChangeDetectorRef
  ) {
    this.words$ = this._dictionaryService.words$;
    this.result$ = this._speechService.result$.pipe(
      tap(() => this._cdr.detectChanges())
    );
    this.sentence$ = this._sentencesService.sentence$.pipe(
      tap((sentence) => this._dictionaryService.update(sentence))
    );
  }
}
