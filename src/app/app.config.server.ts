import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


const serverConfig: ApplicationConfig = {
  providers: [
  provideAnimationsAsync()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
