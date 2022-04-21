import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Api } from './api.abstract';
import { ApiService } from './api.service';
import { APP_BASE_URL } from './api-base-url.token';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: Api,
      useClass: ApiService,
    },
  ],
})
export class ApiModule {
  static forRoot(config: { baseURL: string }): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: APP_BASE_URL,
          useValue: config.baseURL,
        },
      ],
    };
  }
}
