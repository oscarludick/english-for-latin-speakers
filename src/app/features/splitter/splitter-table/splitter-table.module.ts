import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { SplitterTableComponent } from './splitter-table.component';

@NgModule({
  imports: [CommonModule, TableModule],
  declarations: [SplitterTableComponent],
  exports: [SplitterTableComponent],
})
export class SplitterTableModule {}
