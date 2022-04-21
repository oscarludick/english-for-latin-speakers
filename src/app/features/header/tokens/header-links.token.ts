import { InjectionToken } from '@angular/core';

import { HeaderLink } from '../interfaces';

export const APP_HEADER_LINKS = new InjectionToken<HeaderLink>(
  'APP_HEADER_LINKS'
);
