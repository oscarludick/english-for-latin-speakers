import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Inject,
} from '@angular/core';

import { Speech } from '@modules/speech';

import { TextTemplate } from '@core/interfaces';
import { APP_TEXT_TEMPLATE } from '@core/tokens';

type AppHeader = TextTemplate['app']['header'];

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
  textTemplate!: AppHeader;

  recording$ = this._speechService.recording$;

  constructor(
    @Inject(APP_TEXT_TEMPLATE) private readonly _textTemplate: TextTemplate,
    private readonly _speechService: Speech
  ) {
    this.textTemplate = this._textTemplate.app.header;
  }
}
