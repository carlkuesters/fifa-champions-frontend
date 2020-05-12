import {Component, Input} from '@angular/core';

import {TournamentMatch} from '../../../model/tournament-match.model';

@Component({
  selector: 'fc-tournament-match-list',
  templateUrl: './tournament-match-list.component.html',
  styleUrls: ['./tournament-match-list.component.scss']
})
export class TournamentMatchListComponent {
  @Input() matches: TournamentMatch[];
}
