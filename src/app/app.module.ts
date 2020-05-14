import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {CoreModule} from './core/core.module';
import {PagesModule} from './pages/pages.module';
import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

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
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
