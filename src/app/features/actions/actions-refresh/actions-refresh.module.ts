import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';

import { ActionsRefreshComponent } from './actions-refresh.component';

@NgModule({
  imports: [CommonModule, ButtonModule, SplitterModule],
  exports: [ActionsRefreshComponent],
  declarations: [ActionsRefreshComponent],
})
export class ActionsRefreshModule {}
