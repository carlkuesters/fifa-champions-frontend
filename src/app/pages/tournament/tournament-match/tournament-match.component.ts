import {Component, Input} from '@angular/core';

import {DisplayedTournamentMatchPlayer} from '../../../model/displayed-tournament-match-player.model';

@Component({
  selector: 'fc-tournament-match',
  templateUrl: './tournament-match.component.html',
  styleUrls: ['./tournament-match.component.scss']
})
export class TournamentMatchComponent {
  @Input() players: DisplayedTournamentMatchPlayer[];
}
