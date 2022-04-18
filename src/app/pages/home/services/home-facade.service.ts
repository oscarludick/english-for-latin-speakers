import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { Speech } from '../../../core/modules/speech';

import {
  DictionaryModel,
  DictionaryService,
  SentencesService,
} from '../../../core/services';

@Injectable()
export class HomeFacadeService {
  sentence$!: Observable<string>;

  result$!: Observable<string>;

  recording$!: Observable<boolean>;

  words$!: Observable<DictionaryModel[]>;

  constructor(
    private readonly speechService: Speech,
    private readonly sentencesService: SentencesService,
    private readonly dictionaryService: DictionaryService
  ) {
    this.words$ = this.dictionaryService.words$;
    this.recording$ = this.speechService.recording$;
    this.result$ = this.speechService.result$;
    this.sentence$ = this.sentencesService.sentence$.pipe(
      tap((sentence) => this.dictionaryService.update(sentence))
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
