import {Component, Input} from '@angular/core';

import {DisplayedTournamentMatchPlayer} from '../../../model/displayed-tournament-match-player.model';
import {MatchType} from '../../../model/match-type.enum';
import {MATCH_CONSTANTS} from '../../../model/match.constants';

@Component({
  selector: 'fc-tournament-match-list',
  templateUrl: './tournament-match-list.component.html',
  styleUrls: ['./tournament-match-list.component.scss']
})
export class TournamentMatchListComponent {

  MATCH_CONSTANTS = MATCH_CONSTANTS;

  @Input() type: MatchType;
  @Input() matches: DisplayedTournamentMatchPlayer[][];

}
