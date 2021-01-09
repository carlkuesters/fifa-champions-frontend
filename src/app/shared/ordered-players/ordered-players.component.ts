import {Component, Input} from '@angular/core';

import {OrderedPlayerEntry} from '../../model/ordered-player-entry.model';

@Component({
  selector: 'fc-ordered-players',
  templateUrl: './ordered-players.component.html',
  styleUrls: ['./ordered-players.component.scss']
})
export class OrderedPlayersComponent {
  @Input() players: OrderedPlayerEntry[];
}
