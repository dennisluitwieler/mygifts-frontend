import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { GIFT_REPOSITORY, InMemoryGiftRepository, LocalStorageGiftRepository } from '@mg-frontend/list';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    // {
    //   provide: GIFT_REPOSITORY,
    //   useClass: InMemoryGiftRepository,
    // }
    {
      provide: GIFT_REPOSITORY,
      useClass: LocalStorageGiftRepository,
    }
  ],
};
