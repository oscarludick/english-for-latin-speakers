import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitterSentenceComponent } from './splitter-sentence.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SplitterSentenceComponent],
  exports: [SplitterSentenceComponent],
})
export class SplitterSentenceModule {}
