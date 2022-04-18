import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerModule } from 'primeng/divider';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [CommonModule, DividerModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
