import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitterModule } from 'primeng/splitter';

import { SplitterTableModule } from './splitter-table';
import { SplitterSpeechModule } from './splitter-speech';
import { SplitterSentenceModule } from './splitter-sentence';

import { SplitterTableConfig } from './models';
import { APP_SPLITTER_TABLE_CONF } from './tokens';

import { SplitterComponent } from './splitter.component';

@NgModule({
  imports: [CommonModule, SplitterModule],
  declarations: [SplitterComponent],
  exports: [
    SplitterComponent,
    SplitterSentenceModule,
    SplitterSpeechModule,
    SplitterTableModule,
  ],
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
