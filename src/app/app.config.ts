import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideRouter, withHashLocation } from '@angular/router';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withHashLocation()), provideClientHydration(withEventReplay()), provideHttpClient(),
  provideHttpClient(withFetch())
  ]
};


