import { Inject, Injectable } from '@angular/core';

import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  shareReplay,
  tap,
} from 'rxjs';

import { APP_SPEECH_API } from './speech-recognition.token';

import { Speech } from './speech.abstract';
import { SpeechApi } from './speech.interface';

@Injectable()
export class SpeechService extends Speech {
  private _INTRODUCTION = 'Press the Record button and start speaking';

  private _MAX_DEBOUNCE = 100;

  private _recordingSubject = new BehaviorSubject(false);

  private _resultSubject = new BehaviorSubject(this._INTRODUCTION);

  recording$ = this._recordingSubject.asObservable().pipe(shareReplay());

  result$ = this._resultSubject
    .asObservable()
    .pipe(
      tap(console.info),
      distinctUntilChanged(),
      debounceTime(this._MAX_DEBOUNCE)
    );

  constructor(@Inject(APP_SPEECH_API) private readonly _speechApi: SpeechApi) {
    super();
    this._speechApi.recognition.onresult = this._onRecognitionResult.bind(this);
  }

  start() {
    this._speechApi.recognition.start();
    this._recordingSubject.next(true);
  }

  stop() {
    this._speechApi.recognition.stop();
    this._recordingSubject.next(false);
  }

  private _onRecognitionResult(event: { results: any[]; resultIndex: number }) {
    let interim = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (!event.results[i].final) {
        interim += event.results[i][0].transcript;
      }
    }
    this._resultSubject.next(interim);
  }
}
