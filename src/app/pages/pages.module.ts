import {NgModule} from '@angular/core';

import {AwardsComponent} from './awards/awards.component';
import {AwardComponent} from './awards/award/award.component';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './home/home.component';
import {HomeTeaserComponent} from './home/home-teaser/home-teaser.component';
import {MembersComponent} from './members/members.component';
import {MembersEntryComponent} from './members/member-entry/members-entry.component';
import {OtherComponent} from './other/other.component';
import {RankingsComponent} from './ranking/rankings.component';
import {TournamentComponent} from './tournament/tournament.component';
import {TournamentGroupComponent} from './tournament/tournament-group/tournament-group.component';
import {TournamentGroupPlayerComponent} from './tournament/tournament-group-player/tournament-group-player.component';
import {TournamentMatchListComponent} from './tournament/tournament-match-list/tournament-match-list.component';
import {TournamentMatchComponent} from './tournament/tournament-match/tournament-match.component';
import {TournamentMetaComponent} from './tournament/tournament-meta/tournament-meta.component';
import {TournamentMetaListComponent} from './tournament/tournament-meta-list/tournament-meta-list.component';
import {TournamentMetaOverviewComponent} from './tournament-meta-overview/tournament-meta-overview.component';
import {TournamentEntryComponent} from './tournaments/tournament-entry/tournament-entry.component';
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
    RankingsComponent,
    TournamentComponent,
    TournamentEntryComponent,
    TournamentGroupComponent,
    TournamentGroupPlayerComponent,
    TournamentMatchComponent,
    TournamentMatchListComponent,
    TournamentMetaComponent,
    TournamentMetaListComponent,
    TournamentMetaOverviewComponent,
    TournamentYearComponent,
    TournamentsComponent
  ],
  providers: [],
  exports: []
})
export class PagesModule { }
