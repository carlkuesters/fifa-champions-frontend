import {Component, Input} from '@angular/core';

import {DisplayedTournamentMatches} from '../../../model/displayed-tournament-matches.model';
import {MatchType} from '../../../model/match-type.enum';

@Component({
  selector: 'fc-tournament-matches',
  templateUrl: './tournament-matches.component.html',
  styleUrls: ['./tournament-matches.component.scss']
})
export class TournamentMatchesComponent {

  MatchType = MatchType;

  @Input() matches: DisplayedTournamentMatches;

}
