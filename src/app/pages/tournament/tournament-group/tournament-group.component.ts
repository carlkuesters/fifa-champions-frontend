import {Component, Input} from '@angular/core';

import {DisplayedTournamentGroup} from '../../../model/displayed-tournament-group.model';

@Component({
  selector: 'fc-tournament-group',
  templateUrl: './tournament-group.component.html',
  styleUrls: ['./tournament-group.component.scss']
})
export class TournamentGroupComponent {
  @Input() group: DisplayedTournamentGroup;
}
