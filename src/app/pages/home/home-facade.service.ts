import { Injectable } from '@angular/core';

import { combineLatest, Observable, of, switchMap } from 'rxjs';

import { Speech } from '../../modules/speech';

import { SentencesService, UtilsService } from '../../core/services';

@Injectable()
export class HomeFacadeService {
  results$!: Observable<string>;

  constructor(
    private readonly _speechService: Speech,
    private readonly _utilService: UtilsService,
    private readonly _sentencesService: SentencesService
  ) {
    this.results$ = combineLatest([
      this._sentencesService.sentence$,
      this._speechService.result$,
    ]).pipe(
      switchMap(([sentence, result]) => {
        const sentenceTokens: string[] = this._utilService.tokenize(sentence);
        if (!result.result)
          return of(
            `A total of ${0} from ${sentenceTokens.length} are correct.`
          );
        const resultTokens: string[] = this._utilService.tokenize(
          result.result
        );

        const total = this._utilService.countInArray(
          resultTokens,
          sentenceTokens
        );
        return of(
          `A total of ${total} from ${sentenceTokens.length} are correct.`
        );
      })
    );
  }
}
