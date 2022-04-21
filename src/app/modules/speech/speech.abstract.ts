import { Observable } from 'rxjs';

export abstract class Speech {
  abstract recording$: Observable<boolean>;

  abstract result$: Observable<{ result: string | null }>;

  abstract start(): void;

  abstract stop(): void;

  abstract speak(text: string, voice?: SpeechSynthesisVoice): void;

  abstract voices(): any[];
}
