import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitterModule } from 'primeng/splitter';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';

import { HeaderModule } from '../../features/header';
import { FooterModule } from '../../features/footer';
import { ActionsModule } from '../../features/actions';

import { AppRecordingModule } from '../../shared/app-recording';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    SplitterModule,
    ButtonModule,
    TableModule,
    DividerModule,

    HeaderModule,
    FooterModule,
    ActionsModule.forRoot({
      refreshTimer: 20 * 1000,
    }),
    AppRecordingModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
