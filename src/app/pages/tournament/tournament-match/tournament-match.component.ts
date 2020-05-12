import {Component, Input} from '@angular/core';

import {TournamentMatch} from '../../../model/tournament-match.model';

@Component({
  selector: 'fc-tournament-match',
  templateUrl: './tournament-match.component.html',
  styleUrls: ['./tournament-match.component.scss']
})
export class TournamentMatchComponent {
  @Input() match: TournamentMatch;
}
