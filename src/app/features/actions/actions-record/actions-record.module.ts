import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';

import { ActionsRecordComponent } from './actions-record.component';

@NgModule({
  imports: [CommonModule, ButtonModule, SplitterModule],
  declarations: [ActionsRecordComponent],
  exports: [ActionsRecordComponent],
})
export class ActionsRecordModule {}
