import { Injectable } from '@angular/core';

import { combineLatest, Observable, of, switchMap } from 'rxjs';

import { Speech } from '../../../modules/speech';

import { SentencesService, UtilsService } from '../../../core/services';

@Injectable()
export class HomeFacadeService {
  accuracy$!: Observable<number>;

  constructor(
    private readonly _speechService: Speech,
    private readonly _utilService: UtilsService,
    private readonly _sentencesService: SentencesService
  ) {
    this.accuracy$ = combineLatest([
      this._sentencesService.sentence$,
      this._speechService.result$,
    ]).pipe(
      switchMap(([sentence, result]) => {
        if (!result.result) return of(0);
        const sentenceTokens: string[] = this._utilService.tokenize(sentence);
        const resultTokens: string[] = this._utilService.tokenize(
          result.result
        );

        const total = this._utilService.countInArray(
          resultTokens,
          sentenceTokens
        );
        return of(total / sentenceTokens.length);
      })
    );
  }
}
