import { ChangeDetectorRef, Injectable } from '@angular/core';

import { combineLatest, Observable, of, switchMap, tap } from 'rxjs';

import { Speech } from '../../../core/modules/speech';

import {
  DictionaryModel,
  DictionaryService,
  SentencesService,
} from '../../../core/services';

@Injectable()
export class HomeFacadeService {
  sentence$!: Observable<string>;

  result$!: Observable<{ result: string | null }>;

  recording$!: Observable<boolean>;

  words$!: Observable<DictionaryModel[]>;

  accuracy$!: Observable<number>;

  constructor(
    private readonly speechService: Speech,
    private readonly sentencesService: SentencesService,
    private readonly dictionaryService: DictionaryService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.words$ = this.dictionaryService.words$;
    this.recording$ = this.speechService.recording$;
    this.result$ = this.speechService.result$.pipe(
      tap(() => this.cdr.detectChanges())
    );
    this.sentence$ = this.sentencesService.sentence$.pipe(
      tap((sentence) => this.dictionaryService.update(sentence))
    );

    this.accuracy$ = combineLatest([this.sentence$, this.result$]).pipe(
      switchMap(([sentence, result]) => {
        if (!result.result) return of(0);
        const sentenceTokens: string[] = sentence.split(' ');
        const resultTokens: string[] = result.result.split(' ') || [];

        let total = 0;
        resultTokens.forEach((token) => {
          const found = sentenceTokens.find((t) => token === t);
          total += found ? 1 : 0;
        });
        return of(total / sentenceTokens.length);
      })
    );
  }

  onRefresh(): void {
    this.sentencesService.update();
  }

  onRecord(isRecording: boolean): void {
    if (isRecording) {
      this.speechService.stop();
    } else {
      this.speechService.start();
    }
  }
}
