import { InjectionToken } from '@angular/core';

import { SplitterTableConfig } from '../models';

export const APP_SPLITTER_TABLE_CONF = new InjectionToken<SplitterTableConfig>(
  'APP_SPLITTER_TABLE_CONF'
);
