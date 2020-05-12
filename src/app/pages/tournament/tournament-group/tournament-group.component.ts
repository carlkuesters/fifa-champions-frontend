import {Component, Input} from '@angular/core';

import {TournamentGroupPlayer} from '../../../model/tournament-group-player.model';

@Component({
  selector: 'fc-tournament-group',
  templateUrl: './tournament-group.component.html',
  styleUrls: ['./tournament-group.component.scss']
})
export class TournamentGroupComponent {
  @Input() groupName: string;
  @Input() group: TournamentGroupPlayer[];
}
