import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

// tslint:disable:max-line-length
import {SharedModule} from '../shared/shared.module';
import {AwardEffects} from '../store/effects/award.effects';
import {FactEffects} from '../store/effects/fact.effects';
import {GeneralEffects} from '../store/effects/general.effects';
import {TournamentMetaOverviewEffects} from '../store/effects/tournament-meta-overview.effects';
import {MemberEffects} from '../store/effects/member.effects';
import {MemberDetailEffects} from '../store/effects/member-detail.effects';
import {RankingEffects} from '../store/effects/ranking.effects';
import {RecordEffects} from '../store/effects/record.effects';
import {RecordSettingEffects} from '../store/effects/record-setting.effects';
import {TournamentDetailEffects} from '../store/effects/tournament-detail.effects';
import {TournamentOverviewEffects} from '../store/effects/tournament-overview.effects';
import {awardReducer} from '../store/reducers/award.reducers';
import {factReducer} from '../store/reducers/fact.reducers';
import {generalReducer} from '../store/reducers/general.reducers';
import {memberReducer} from '../store/reducers/member.reducers';
import {memberDetailReducer} from '../store/reducers/member-detail.reducers';
import {rankingReducer} from '../store/reducers/ranking.reducers';
import {recordReducer} from '../store/reducers/record.reducers';
import {recordSettingReducer} from '../store/reducers/record-setting.reducers';
import {tournamentDetailReducer} from '../store/reducers/tournament-detail.reducers';
import {tournamentMetaOverviewReducer} from '../store/reducers/tournament-meta-overview.reducers';
import {tournamentOverviewReducer} from '../store/reducers/tournament-overview.reducers';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {PageWrapperComponent} from './components/pageWrapper/pageWrapper.component';
import {AwardHttpService} from './services/award-http/award-http.service';
import {AwardStoreFacadeService} from './services/award-store-facade/award-store-facade.service';
import {FactHttpService} from './services/fact-http/fact-http.service';
import {FactStoreFacadeService} from './services/fact-store-facade/fact-store-facade.service';
import {GeneralHttpService} from './services/general-http/general-http.service';
import {GeneralStoreFacadeService} from './services/general-store-facade/general-store-facade.service';
import {TournamentMetaOverviewStoreFacadeService} from './services/tournament-meta-overview-store-facade/tournament-meta-overview-store-facade.service';
import {MemberDetailStoreFacadeService} from './services/member-detail-store-facade/member-detail-store-facade.service';
import {MemberHttpService} from './services/member-http/member-http.service';
import {MemberStoreFacadeService} from './services/member-store-facade/member-store-facade.service';
import {TournamentDetailStoreFacadeService} from './services/tournament-detail-store-facade/tournament-detail-store-facade.service';
import {TournamentHttpService} from './services/tournament-http/tournament-http.service';
import {TournamentOverviewStoreFacadeService} from './services/tournament-overview-store-facade/tournament-overview-store-facade.service';
import {RankingHttpService} from './services/ranking-http/ranking-http.service';
import {RankingStoreFacadeService} from './services/ranking-store-facade/ranking-store-facade.service';
import {RecordHttpService} from './services/record-http/record-http.service';
import {RecordSettingStoreFacadeService} from './services/record-setting-store-facade/record-setting-store-facade.service';
import {RecordStoreFacadeService} from './services/record-store-facade/record-store-facade.service';
// tslint:enable:max-line-length

@NgModule({
  imports: [
    HttpClientModule,

    StoreModule.forRoot({}),
    StoreModule.forFeature('award', awardReducer),
    StoreModule.forFeature('fact', factReducer),
    StoreModule.forFeature('general', generalReducer),
    StoreModule.forFeature('member', memberReducer),
    StoreModule.forFeature('memberDetail', memberDetailReducer),
    StoreModule.forFeature('ranking', rankingReducer),
    StoreModule.forFeature('record', recordReducer),
    StoreModule.forFeature('recordSetting', recordSettingReducer),
    StoreModule.forFeature('tournamentDetail', tournamentDetailReducer),
    StoreModule.forFeature('tournamentMetaOverview', tournamentMetaOverviewReducer),
    StoreModule.forFeature('tournamentOverview', tournamentOverviewReducer),
    EffectsModule.forRoot([
      AwardEffects,
      FactEffects,
      GeneralEffects,
      MemberDetailEffects,
      MemberEffects,
      RankingEffects,
      RecordEffects,
      RecordSettingEffects,
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
    FactHttpService,
    FactStoreFacadeService,
    GeneralHttpService,
    GeneralStoreFacadeService,
    MemberDetailStoreFacadeService,
    MemberHttpService,
    MemberStoreFacadeService,
    RankingHttpService,
    RankingStoreFacadeService,
    RecordHttpService,
    RecordSettingStoreFacadeService,
    RecordStoreFacadeService,
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
