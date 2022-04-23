import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';

import { APP_ACTIONS_REFRESH } from '@features/actions/tokens';

import {
  ActionsDefaultComponent,
  ActionsRecordComponent,
  ActionsRefreshComponent,
} from '@features/actions/components';

@NgModule({
  imports: [CommonModule, ButtonModule, SplitterModule],
  declarations: [
    ActionsDefaultComponent,
    ActionsRecordComponent,
    ActionsRefreshComponent,
  ],
  exports: [ActionsDefaultComponent],
  providers: [],
})
export class ActionsModule {
  static forRoot(config: {
    refreshTimer: number;
  }): ModuleWithProviders<ActionsModule> {
    return {
      ngModule: ActionsModule,
      providers: [
        {
          provide: APP_ACTIONS_REFRESH,
          useValue: config.refreshTimer,
        },
      ],
    };
  }
}
