import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

import { AppAudioModule } from '../../../shared/app-audio';

import { SplitterAudioComponent } from './splitter-audio.component';

@NgModule({
  imports: [CommonModule, TableModule, DialogModule, AppAudioModule],
  declarations: [SplitterAudioComponent],
  exports: [SplitterAudioComponent],
})
export class SplitterAudioModule {}
