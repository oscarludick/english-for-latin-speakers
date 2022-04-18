import { NgModule } from '@angular/core';

import { ApiModule } from './modules/api';
import { SpeechModule } from './modules/speech';

import { APP_SENTENCES_MAX } from './tokens';

import { DictionaryService, SentencesService } from './services';

@NgModule({
  imports: [
    ApiModule.forRoot({ baseURL: 'assets/data' }),
    SpeechModule.forRoot({
      lang: 'en-US',
      continuous: true,
    }),
  ],
  providers: [
    {
      provide: APP_SENTENCES_MAX,
      useValue: 723,
    },
    SentencesService,
    DictionaryService,
  ],
})
export class CoreModule {}
