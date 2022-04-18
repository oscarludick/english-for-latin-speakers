import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerModule } from 'primeng/divider';

import { SplitterSpeechComponent } from './splitter-speech.component';

@NgModule({
  imports: [CommonModule, DividerModule],
  declarations: [SplitterSpeechComponent],
  exports: [SplitterSpeechComponent],
})
export class SplitterSpeechModule {}
