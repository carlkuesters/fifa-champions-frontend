import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AwardsComponent} from './pages/awards/awards.component';
import {HomeComponent} from './pages/home/home.component';
import {MemberComponent} from './pages/member/member.component';
import {MembersComponent} from './pages/members/members.component';
import {OtherComponent} from './pages/other/other.component';
import {TournamentMetaOverviewComponent} from './pages/tournament-meta-overview/tournament-meta-overview.component';
import {RankingsComponent} from './pages/ranking/rankings.component';
import {TournamentComponent} from './pages/tournament/tournament.component';
import {TournamentsComponent} from './pages/tournaments/tournaments.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'members', component: MembersComponent },
  { path: 'member/:memberSeoId', component: MemberComponent },
  { path: 'rankings', component: RankingsComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'tournament/:tournamentSeoId', component: TournamentComponent },
  { path: 'other', component: OtherComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'overview/actions', component: TournamentMetaOverviewComponent, data: { metaType: 'action' } },
  { path: 'overview/goals', component: TournamentMetaOverviewComponent, data: { metaType: 'goal' } },
  { path: 'overview/matches', component: TournamentMetaOverviewComponent, data: { metaType: 'match' } },
  { path: 'overview/news', component: TournamentMetaOverviewComponent, data: { metaType: 'news' } },
  { path: 'overview/scandals', component: TournamentMetaOverviewComponent, data: { metaType: 'scandal' } },
  { path: 'overview/scorers', component: TournamentMetaOverviewComponent, data: { metaType: 'scorer' } },
  { path: 'overview/quotes', component: TournamentMetaOverviewComponent, data: { metaType: 'quote' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
