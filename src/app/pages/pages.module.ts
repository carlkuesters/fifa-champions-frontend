import {NgModule} from '@angular/core';

import {AwardsComponent} from './awards/awards.component';
import {AwardComponent} from './awards/award/award.component';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './home/home.component';
import {HomeTeaserComponent} from './home/home-teaser/home-teaser.component';
import {MembersComponent} from './members/members.component';
import {MembersEntryComponent} from './members/member-entry/members-entry.component';
import {OtherComponent} from './other/other.component';
import {QuoteComponent} from './quote/quote.component';
import {RankingsComponent} from './ranking/rankings.component';
import {TournamentComponent} from './tournaments/tournament/tournament.component';
import {TournamentYearComponent} from './tournaments/tournament-year/tournament-year.component';
import {TournamentsComponent} from './tournaments/tournaments.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AwardComponent,
    AwardsComponent,
    HomeComponent,
    HomeTeaserComponent,
    MembersComponent,
    MembersEntryComponent,
    OtherComponent,
    QuoteComponent,
    RankingsComponent,
    TournamentComponent,
    TournamentYearComponent,
    TournamentsComponent
  ],
  providers: [],
  exports: []
})
export class PagesModule { }
