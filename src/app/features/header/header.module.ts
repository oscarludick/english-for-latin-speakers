import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';

import { AppLinkModule } from '@shared/app-link';
import { AppTitleModule } from '@shared/app-title';
import { AppRecordingModule } from '@shared/app-recording';

import { HEADER_LINKS } from './constants';

import { APP_HEADER_LINKS } from './tokens';

import { HeaderComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,

    AppTitleModule,
    AppRecordingModule,
    AppLinkModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [
    {
      provide: APP_HEADER_LINKS,
      useValue: HEADER_LINKS,
    },
  ],
})
export class HeaderModule {}
