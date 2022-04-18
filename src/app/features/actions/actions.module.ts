import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APP_ACTIONS_REFRESH } from './tokens';

import { ActionsControlsService } from './services';

import { ActionsRecordModule } from './actions-record';
import { ActionsRefreshModule } from './actions-refresh';

import { ActionsComponent } from './actions.component';

@NgModule({
  imports: [CommonModule],
  exports: [ActionsComponent, ActionsRefreshModule, ActionsRecordModule],
  declarations: [ActionsComponent],
  providers: [ActionsControlsService],
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
