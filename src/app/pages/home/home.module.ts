import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../../features/header';
import { FooterModule } from '../../features/footer';
import { ActionsModule } from '../../features/actions';
import { SSplitterModule } from '../../features/splitter';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    HeaderModule,
    FooterModule,
    SSplitterModule.forRoot({
      table: {
        headers: ['Word', 'Phonetic', 'Audio'],
        scrollHeight: '379px',
        scrollable: true,
      },
    }),
    ActionsModule.forRoot({
      refreshTimer: 20 * 1000,
    }),
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
