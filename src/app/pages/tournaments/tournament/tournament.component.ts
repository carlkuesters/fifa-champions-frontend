import {Component, Input} from '@angular/core';

import {Tournament} from '../../../model/tournament.model';

@Component({
  selector: 'fc-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent {
  @Input() tournament: Tournament;
}
