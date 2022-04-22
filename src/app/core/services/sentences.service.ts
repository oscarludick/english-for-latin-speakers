import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

import { APP_SENTENCES_MAX } from '../tokens';

import { Api } from '../../modules/api';

import { Sentence, SentencesResponse } from '../models';

import { UtilsService } from './utils.service';

@Injectable()
export class SentencesService {
  private _sentencesNext$ = new BehaviorSubject<number>(
    this._utilsService.randomize(this._sentencesMax)
  );

  private _sentencesApi$: Observable<Sentence[]> = this._api
    .get<SentencesResponse>('/data/sentences.json')
    .pipe(map((response) => new SentencesResponse(response).data));

  sentence$: Observable<string> = combineLatest([
    this._sentencesApi$,
    this._sentencesNext$.asObservable(),
  ]).pipe(map(([sentences, next]) => sentences[next].sentence));

  constructor(
    @Inject(APP_SENTENCES_MAX) private readonly _sentencesMax: number,
    private readonly _api: Api,
    private readonly _utilsService: UtilsService
  ) {}

  update(): void {
    const index = this._utilsService.randomize(this._sentencesMax);
    this._sentencesNext$.next(index);
  }
}
