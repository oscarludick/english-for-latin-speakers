import { Injectable } from '@angular/core';

import { BehaviorSubject, forkJoin, map, Observable, switchMap } from 'rxjs';

import { UtilsService } from './utils.service';

import { Api } from '../modules/api';

export interface DictionaryModel {
  word: string;
  phonetic: string;
  audio: any;
}

@Injectable()
export class DictionaryService {
  private API = 'https://api.dictionaryapi.dev/api/v2/entries/en';

  private tokens$ = new BehaviorSubject<string[]>([]);

  words$ = this.tokens$.asObservable().pipe(
    map((tokens) => this._getWords(tokens)),
    switchMap((source) => forkJoin(source)),
    map(
      (result) =>
        this._utilsService.uniqueArray(result, 'word') as DictionaryModel[]
    )
  );

  constructor(
    private readonly _api: Api,
    private readonly _utilsService: UtilsService
  ) {}

  update(sentence: string): void {
    const tokens = this._utilsService.tokenize(sentence);
    this.tokens$.next(tokens);
  }

  private _getWords(tokens: string[]): Observable<DictionaryModel[]>[] {
    return tokens.map((word) => this._get(word));
  }

  private _get(word: string): Observable<any[]> {
    const cleanWord = word.replace('.', '').toLocaleLowerCase();
    return this._api.get(`${this.API}/${cleanWord}`);
  }
}
