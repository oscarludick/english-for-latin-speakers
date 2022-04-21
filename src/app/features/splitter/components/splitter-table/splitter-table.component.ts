import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Inject,
} from '@angular/core';

import { Dictionary } from '@core/models';

import { SplitterTableConfig } from '../../interfaces';
import { APP_SPLITTER_TABLE_CONF } from '../../tokens';

@Component({
  selector: 'app-splitter-table',
  templateUrl: './splitter-table.component.html',
  styleUrls: ['./splitter-table.component.scss'],
  host: {
    class: 'app-splitter-table',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitterTableComponent {
  @Input()
  data!: Dictionary[];

  config: SplitterTableConfig;

  selected!: Dictionary;

  display = false;

  constructor(
    @Inject(APP_SPLITTER_TABLE_CONF)
    readonly _config: SplitterTableConfig
  ) {
    this.config = _config;
  }

  onAudio(word: Dictionary | null): boolean {
    this.selected = word!;
    this.display = !!word;
    return false;
  }
}
