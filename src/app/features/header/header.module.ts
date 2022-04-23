import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';

import { AppLinkModule } from '@shared/app-link';
import { AppTitleModule } from '@shared/app-title';
import { AppRecordingModule } from '@shared/app-recording';

import { HeaderComponent } from '@features/header/components';

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
})
export class HeaderModule {}
