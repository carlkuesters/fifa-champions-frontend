import {Component, Input} from '@angular/core';

import {TournamentGroupPlayer} from '../../../model/tournament-group-player.model';

@Component({
  selector: 'fc-tournament-group-player',
  templateUrl: './tournament-group-player.component.html',
  styleUrls: ['./tournament-group-player.component.scss']
})
export class TournamentGroupPlayerComponent {
  @Input() groupPlayer: TournamentGroupPlayer;
}
