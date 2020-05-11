import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {CoreModule} from './core/core.module';
import {InitService} from './core/services/init/init.service';
import {PagesModule} from './pages/pages.module';
import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

export function initializeApp(initService: InitService) {
  return () => initService.initialize();
}

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,

    CoreModule,
    SharedModule,

    PagesModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [InitService], multi: true },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
