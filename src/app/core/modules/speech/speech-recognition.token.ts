import { InjectionToken } from '@angular/core';

import { SpeechApi } from './speech.interface';

export const APP_SPEECH_API = new InjectionToken<SpeechApi>('APP_SPEECH_API');
