import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Inject,
} from '@angular/core';

import { Speech } from '@modules/speech';

import { APP_HEADER_LINKS } from '../../tokens';

import { HeaderLink } from '../../interfaces';

@Component({
  selector: 'app-header-default',
  templateUrl: './header-default.component.html',
  styleUrls: ['./header-default.component.scss'],
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

  recording$ = this._speechService.recording$;

  headerLinks: HeaderLink[];

  constructor(
    @Inject(APP_HEADER_LINKS) private readonly _headerLinks: HeaderLink[],
    private readonly _speechService: Speech
  ) {
    this.headerLinks = this._headerLinks;
  }
}
