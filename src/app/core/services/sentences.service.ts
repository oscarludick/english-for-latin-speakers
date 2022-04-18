import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

import { APP_SENTENCES_MAX } from '../tokens';

import { Api } from '../modules/api';

import { UtilsService } from './utils.service';

export class SentencesResponse {
  data!: Sentence[];

  constructor(response: { data: any[] }) {
    this.data = response.data.map((sentence) => new Sentence(sentence));
  }
}

export class Sentence {
  sentence!: string;

  constructor(sentence: { sentence: string }) {
    this.sentence = sentence.sentence;
  }
}

@Injectable()
export class SentencesService {
  private _sentencesNext$ = new BehaviorSubject<number>(
    this._utilsService.randomize(this._sentencesMax)
  );

  private _sentencesApi$: Observable<Sentence[]> = this._api
    .get<SentencesResponse>('sentences.json')
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
