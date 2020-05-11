import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AwardsComponent} from './pages/awards/awards.component';
import {HomeComponent} from './pages/home/home.component';
import {MembersComponent} from './pages/members/members.component';
import {OtherComponent} from './pages/other/other.component';
import {QuoteComponent} from './pages/quote/quote.component';
import {RankingsComponent} from './pages/ranking/rankings.component';
import {TournamentsComponent} from './pages/tournaments/tournaments.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'members', component: MembersComponent },
  { path: 'rankings', component: RankingsComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'other', component: OtherComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'quote', component: QuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
