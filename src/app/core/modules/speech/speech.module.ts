import { ModuleWithProviders, NgModule } from '@angular/core';

import { APP_SPEECH_API } from './speech-recognition.token';

import { Speech } from './speech.abstract';
import { SpeechApi } from './speech.interface';

import { SpeechService } from './speech.service';

declare let SpeechRecognition: any;
declare let SpeechGrammarList: any;
declare let SpeechRecognitionEvent: any;

@NgModule({
  providers: [
    {
      provide: Speech,
      useClass: SpeechService,
    },
  ],
})
export class SpeechModule {
  static forRoot(config: {
    lang: string;
    continuous: boolean;
  }): ModuleWithProviders<SpeechModule> {
    return {
      ngModule: SpeechModule,
      providers: [
        {
          provide: APP_SPEECH_API,
          useFactory: (): SpeechApi => {
            const recognition = new SpeechRecognition();
            const speechRecognitionList = new SpeechGrammarList();

            recognition.grammars = speechRecognitionList;
            recognition.continuous = config.continuous;
            recognition.lang = config.lang;
            recognition.interimResults = true;
            recognition.maxAlternatives = 1;

            return {
              recognition,
              speechRecognitionList,
            };
          },
        },
      ],
    };
  }
}
