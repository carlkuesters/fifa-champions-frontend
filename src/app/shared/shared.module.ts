import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {DropdownComponent} from './dropdown/dropdown.component';
import {MemberDescriptionComponent} from './member-description/member-description.component';
import {OrderedPlayersComponent} from './ordered-players/ordered-players.component';
import {OrderedPlayersEntryComponent} from './ordered-players-entry/ordered-players-entry.component';
import {RandomMemberInfoComponent} from './random-member-info/random-member-info.component';
import {TournamentReferencesComponent} from './match-list/tournament-references.component';
import {YoutubeVideoComponent} from './youtube-video/youtube-video.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    DropdownComponent,
    MemberDescriptionComponent,
    OrderedPlayersComponent,
    OrderedPlayersEntryComponent,
    RandomMemberInfoComponent,
    TournamentReferencesComponent,
    YoutubeVideoComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    DropdownComponent,
    MemberDescriptionComponent,
    OrderedPlayersComponent,
    RandomMemberInfoComponent,
    TournamentReferencesComponent,
    YoutubeVideoComponent
  ],
})
export class SharedModule { }
