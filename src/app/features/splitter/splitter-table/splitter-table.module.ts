import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { SplitterAudioModule } from '../splitter-audio';

import { SplitterTableComponent } from './splitter-table.component';

@NgModule({
  imports: [CommonModule, TableModule, SplitterAudioModule],
  declarations: [SplitterTableComponent],
  exports: [SplitterTableComponent],
})
export class SplitterTableModule {}
