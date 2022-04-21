import { InjectionToken } from '@angular/core';

import { SplitterTableConfig } from '../interfaces';

export const APP_SPLITTER_TABLE_CONF = new InjectionToken<SplitterTableConfig>(
  'APP_SPLITTER_TABLE_CONF'
);
