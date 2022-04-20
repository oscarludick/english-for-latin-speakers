import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  forkJoin,
  map,
  Observable,
  switchMap,
  tap,
} from 'rxjs';

import { UtilsService } from './utils.service';

import { Api } from '../modules/api';

export class DictionaryModel {
  word: string;
  phonetic: string;
  phonetics: { audio: string; text: string }[];
  hasPhonetics: boolean;

  constructor(item: any) {
    this.word = item.word;
    this.phonetic = item.phonetic;
    this.phonetics = item.phonetics.filter(
      (p: { audio: string }) => p.audio.length > 0
    );
    this.hasPhonetics = this.phonetics.length > 0;
  }
}

@Injectable()
export class DictionaryService {
  private API = 'https://api.dictionaryapi.dev/api/v2/entries/en';

  private tokens$ = new BehaviorSubject<string[]>([]);

  words$ = this.tokens$.asObservable().pipe(
    map((tokens) => this._get(tokens)),
    switchMap((source) => forkJoin(source)),
    map((result) => this._formatResponse(result))
  );

  constructor(
    private readonly _api: Api,
    private readonly _utilsService: UtilsService
  ) {}

  update(sentence: string): void {
    const tokens = this._utilsService.tokenize(sentence);
    this.tokens$.next(tokens);
  }

  private _get(tokens: string[]): Observable<DictionaryModel[]>[] {
    return tokens.map((word) => {
      const cleaned = word.replace('.', '').toLocaleLowerCase();
      return this._api.get(`${this.API}/${cleaned}`);
    });
  }

  private _formatResponse(words: any[]): DictionaryModel[] {
    const repeat: string[] = [];
    const notEmpty = this._utilsService.nonEmptyArray(words).flat();

    let unique: DictionaryModel[] = [];

    notEmpty.forEach((item) => {
      if (repeat.includes(item.word)) {
      } else {
        unique.push(new DictionaryModel(item));
      }
    });

    return unique;
  }
}
