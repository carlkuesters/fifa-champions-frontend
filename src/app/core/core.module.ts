import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

// tslint:disable:max-line-length
import {SharedModule} from '../shared/shared.module';
import {AwardEffects} from '../store/effects/award.effects';
import {GeneralEffects} from '../store/effects/general.effects';
import {TournamentMetaOverviewEffects} from '../store/effects/tournament-meta-overview.effects';
import {MemberEffects} from '../store/effects/member.effects';
import {MemberDetailEffects} from '../store/effects/member-detail.effects';
import {TournamentDetailEffects} from '../store/effects/tournament-detail.effects';
import {TournamentOverviewEffects} from '../store/effects/tournament-overview.effects';
import {awardReducer} from '../store/reducers/award.reducers';
import {generalReducer} from '../store/reducers/general.reducers';
import {memberReducer} from '../store/reducers/member.reducers';
import {memberDetailReducer} from '../store/reducers/member-detail.reducers';
import {tournamentDetailReducer} from '../store/reducers/tournament-detail.reducers';
import {tournamentMetaOverviewReducer} from '../store/reducers/tournament-meta-overview.reducers';
import {tournamentOverviewReducer} from '../store/reducers/tournament-overview.reducers';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {PageWrapperComponent} from './components/pageWrapper/pageWrapper.component';
import {AwardHttpService} from './services/award-http/award-http.service';
import {AwardStoreFacadeService} from './services/award-store-facade/award-store-facade.service';
import {GeneralHttpService} from './services/general-http/general-http.service';
import {GeneralStoreFacadeService} from './services/general-store-facade/general-store-facade.service';
import {TournamentMetaOverviewStoreFacadeService} from './services/tournament-meta-overview-store-facade/tournament-meta-overview-store-facade.service';
import {MemberDetailStoreFacadeService} from './services/member-detail-store-facade/member-detail-store-facade.service';
import {MemberHttpService} from './services/member-http/member-http.service';
import {MemberStoreFacadeService} from './services/member-store-facade/member-store-facade.service';
import {TournamentDetailStoreFacadeService} from './services/tournament-detail-store-facade/tournament-detail-store-facade.service';
import {TournamentHttpService} from './services/tournament-http/tournament-http.service';
import {TournamentOverviewStoreFacadeService} from './services/tournament-overview-store-facade/tournament-overview-store-facade.service';
// tslint:enable:max-line-length

@NgModule({
  imports: [
    HttpClientModule,

    StoreModule.forRoot({}),
    StoreModule.forFeature('award', awardReducer),
    StoreModule.forFeature('general', generalReducer),
    StoreModule.forFeature('member', memberReducer),
    StoreModule.forFeature('memberDetail', memberDetailReducer),
    StoreModule.forFeature('tournamentDetail', tournamentDetailReducer),
    StoreModule.forFeature('tournamentMetaOverview', tournamentMetaOverviewReducer),
    StoreModule.forFeature('tournamentOverview', tournamentOverviewReducer),
    EffectsModule.forRoot([
      AwardEffects,
      GeneralEffects,
      MemberDetailEffects,
      MemberEffects,
      TournamentDetailEffects,
      TournamentMetaOverviewEffects,
      TournamentOverviewEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),

    SharedModule,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    PageWrapperComponent
  ],
  providers: [
    AwardHttpService,
    AwardStoreFacadeService,
    GeneralHttpService,
    GeneralStoreFacadeService,
    MemberDetailStoreFacadeService,
    MemberHttpService,
    MemberStoreFacadeService,
    TournamentDetailStoreFacadeService,
    TournamentHttpService,
    TournamentMetaOverviewStoreFacadeService,
    TournamentOverviewStoreFacadeService,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PageWrapperComponent
  ]
})
export class CoreModule { }
