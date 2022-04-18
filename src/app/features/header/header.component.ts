import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Inject,
} from '@angular/core';

import { APP_HEADER_LINKS } from './tokens';

import { HeaderLink } from './models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    class: 'app-header',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input()
  title!: string;

  @Input()
  text!: string;

  @Input()
  recording!: boolean;

  headerLinks: HeaderLink[];

  constructor(
    @Inject(APP_HEADER_LINKS) private readonly _headerLinks: HeaderLink[]
  ) {
    this.headerLinks = this._headerLinks;
  }
}
