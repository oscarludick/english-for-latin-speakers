import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { ListboxModule } from 'primeng/listbox';
import { SplitterModule } from 'primeng/splitter';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { AppAudioModule } from '@shared/app-audio';

import {
  HighlightDirective,
  SplitterComponent,
  SplitterSentenceActionsComponent,
  SplitterSentenceComponent,
  SplitterSpeechComponent,
  SplitterTableComponent,
  SplitterTableModalComponent,
  TokenizeDirective,
  WordComponent,
} from './components';

import { SplitterTableConfig } from './interfaces';

import { APP_SPLITTER_TABLE_CONF } from './tokens';

@NgModule({
  imports: [
    CommonModule,
    SplitterModule,
    TableModule,
    DialogModule,
    DividerModule,
    ButtonModule,
    ListboxModule,
    OverlayPanelModule,

    AppAudioModule,
  ],
  declarations: [
    SplitterComponent,
    SplitterSentenceActionsComponent,
    SplitterSentenceComponent,
    SplitterSpeechComponent,
    SplitterTableComponent,
    SplitterTableModalComponent,

    TokenizeDirective,
    WordComponent,
    HighlightDirective,
  ],
  exports: [SplitterComponent],
})
export class SSplitterModule {
  static forRoot(config: {
    table: SplitterTableConfig;
  }): ModuleWithProviders<SSplitterModule> {
    return {
      ngModule: SSplitterModule,
      providers: [
        {
          provide: APP_SPLITTER_TABLE_CONF,
          useValue: config.table,
        },
      ],
    };
  }
}
