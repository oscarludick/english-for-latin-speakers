import { ChangeDetectorRef, Component } from '@angular/core';

import { HomeFacadeService } from './services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    class: 'app-home',
  },
  providers: [HomeFacadeService],
})
export class HomeComponent {
  constructor(
    public readonly facade: HomeFacadeService,
    readonly cdr: ChangeDetectorRef
  ) {}
}
