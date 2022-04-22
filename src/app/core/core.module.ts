import { APP_INITIALIZER, NgModule } from '@angular/core';

import { tap } from 'rxjs';

import { Api, ApiModule } from '@modules/api';
import { SpeechModule } from '@modules/speech';

import { APP_SENTENCES_MAX, APP_TEXT_TEMPLATE } from './tokens';

import { DictionaryService, SentencesService } from './services';

@NgModule({
  imports: [
    ApiModule.forRoot({ baseURL: 'assets/' }),
    SpeechModule.forRoot({
      lang: 'en-US',
      continuous: true,
    }),
  ],
  providers: [
    {
      provide: APP_TEXT_TEMPLATE,
      useValue: {},
    },
    {
      provide: APP_SENTENCES_MAX,
      useValue: 723,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (api: Api, textTemplate: Object) => {
        return () => {
          return api
            .get('/i18n/en.json')
            .pipe(tap((response) => Object.assign(textTemplate, response)));
        };
      },
      deps: [Api, APP_TEXT_TEMPLATE],
      multi: true,
    },
    SentencesService,
    DictionaryService,
  ],
})
export class CoreModule {}
