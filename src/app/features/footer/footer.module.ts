import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerModule } from 'primeng/divider';

import { FooterDefaultComponent } from './components';

@NgModule({
  imports: [CommonModule, DividerModule],
  declarations: [FooterDefaultComponent],
  exports: [FooterDefaultComponent],
})
export class FooterModule {}
