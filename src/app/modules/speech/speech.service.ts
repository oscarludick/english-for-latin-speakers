import { Inject, Injectable } from '@angular/core';

import {
  BehaviorSubject,
  debounceTime,
  distinctUntilKeyChanged,
  shareReplay,
} from 'rxjs';

import { APP_SPEECH_API } from './speech-recognition.token';

import { Speech } from './speech.abstract';
import { SpeechApi } from './speech.interface';

@Injectable()
export class SpeechService extends Speech {
  private _MAX_DEBOUNCE = 100;

  private _recordingSubject = new BehaviorSubject(false);

  private _resultSubject = new BehaviorSubject<{ result: string | null }>({
    result: null,
  });

  recording$ = this._recordingSubject.asObservable().pipe(shareReplay());

  result$ = this._resultSubject
    .asObservable()
    .pipe(debounceTime(this._MAX_DEBOUNCE), distinctUntilKeyChanged('result'));

  constructor(@Inject(APP_SPEECH_API) private readonly _speechApi: SpeechApi) {
    super();
    this._speechApi.recognition.onresult = this._onRecognitionResult.bind(this);
  }

  start(): void {
    this._speechApi.recognition.start();
    this._recordingSubject.next(true);
  }

  stop(): void {
    this._speechApi.recognition.stop();
    this._recordingSubject.next(false);
  }

  speak(text: string, voice?: SpeechSynthesisVoice): void {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice
      ? voice
      : this.voices().find((v) => v.lang === 'en-US');
    utterance.pitch = 0.8;
    utterance.rate = 1;
    this._speechApi.speechSynthesis.speak(utterance);
  }

  voices(): any[] {
    return this._speechApi.speechSynthesis.getVoices();
  }

  private _onRecognitionResult(event: {
    results: any[];
    resultIndex: number;
  }): void {
    let interim = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (!event.results[i].final) {
        interim += event.results[i][0].transcript;
      }
    }
    this._resultSubject.next({ result: interim });
  }
}
