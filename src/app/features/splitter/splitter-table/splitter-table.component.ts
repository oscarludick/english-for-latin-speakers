import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Inject,
} from '@angular/core';

import { DictionaryModel } from '../../../core/services';

import { SplitterTableConfig } from '../models';
import { APP_SPLITTER_TABLE_CONF } from '../tokens';

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
  data!: DictionaryModel[];

  config: SplitterTableConfig;

  selected!: DictionaryModel;

  display = false;

  constructor(
    @Inject(APP_SPLITTER_TABLE_CONF)
    readonly _config: SplitterTableConfig
  ) {
    this.config = _config;
  }

  onAudio(word: DictionaryModel | null): boolean {
    this.selected = word!;
    this.display = !!word;
    return false;
  }
}
