import { InjectionToken } from '@angular/core';
import { GiftRepository } from './gift.repository';

export const GIFT_REPOSITORY = new InjectionToken<GiftRepository>(
  'GiftRepository'
);
