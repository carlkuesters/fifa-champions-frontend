import {Component, Input} from '@angular/core';

import {TournamentYear} from '../model/tournament-year.model';

@Component({
  selector: 'fc-tournament-year',
  templateUrl: './tournament-year.component.html',
  styleUrls: ['./tournament-year.component.scss']
})
export class TournamentYearComponent {
  @Input() tournamentYear: TournamentYear;
}
