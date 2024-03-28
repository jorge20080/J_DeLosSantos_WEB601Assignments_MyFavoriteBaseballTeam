import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from "@angular/common/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })),
    provideRouter(routes, withComponentInputBinding())
  ]
};
