import {Component, Input} from '@angular/core';

import {Tournament} from '../../../model/tournament.model';
import { TOURNAMENT_TYPES } from '../tournament.constants';

@Component({
  selector: 'fc-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent {

  TOURNAMENT_TYPES = TOURNAMENT_TYPES;

  @Input() tournament: Tournament;

}
