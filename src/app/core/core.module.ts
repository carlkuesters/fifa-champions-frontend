import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {PageWrapperComponent} from './components/pageWrapper/pageWrapper.component';
import {BackendInformationService} from './services/backend-information/backend-information.service';
import {InitService} from './services/init/init.service';
import {StateService} from './services/state/state.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    PageWrapperComponent
  ],
  providers: [
    BackendInformationService,
    InitService,
    StateService
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PageWrapperComponent
  ]
})
export class CoreModule { }
