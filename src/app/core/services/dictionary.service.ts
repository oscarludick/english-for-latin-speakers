import { Injectable } from '@angular/core';

import { BehaviorSubject, forkJoin, map, Observable, switchMap } from 'rxjs';

import { Api } from '../../modules/api';

import { Dictionary } from '../models';

import { UtilsService } from './utils.service';

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

  private _get(tokens: string[]): Observable<Dictionary[]>[] {
    return tokens.map((word) => {
      const cleaned = this._utilsService.clean(word);
      return this._api.get(`${this.API}/${cleaned}`);
    });
  }

  private _formatResponse(words: any[]): Dictionary[] {
    const response: Dictionary[] = this._utilsService
      .filterArray(words, null)
      .flat();

    const repeat: string[] = [];
    const unique: Dictionary[] = [];

    const updateUniqueItems = (item: Dictionary) => {
      unique.push(new Dictionary(item));
      repeat.push(item.word);
    };

    const mergeItems = (item: Dictionary, currentItem: Dictionary) => {
      return new Dictionary({
        ...item,
        phonetic: item.phonetic ? item.phonetic : currentItem.phonetic,
        phonetics: [...item.phonetics, ...currentItem.phonetics],
        meanings: [...item.meanings, ...currentItem.meanings],
        sourceUrls: [...item.sourceUrls, ...currentItem.sourceUrls],
      });
    };

    response.forEach((currentItem) => {
      if (repeat.includes(currentItem.word)) {
        const index = this._utilsService.findIndex(unique, 'word', currentItem);
        if (index !== -1) {
          unique[index] = mergeItems(unique[index], currentItem);
        }
      } else {
        updateUniqueItems(currentItem);
      }
    });

    return unique;
  }
}
