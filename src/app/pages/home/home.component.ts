import { ChangeDetectorRef, Component } from '@angular/core';

import { HomeFacadeService } from './services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeFacadeService],
})
export class HomeComponent {
  title = 'english-for-latin-speakers';

  constructor(
    public readonly facade: HomeFacadeService,
    readonly cdr: ChangeDetectorRef
  ) {}
}
