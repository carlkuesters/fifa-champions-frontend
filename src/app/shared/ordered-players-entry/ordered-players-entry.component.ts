import {Component, Input} from '@angular/core';

import {OrderedPlayerEntry} from '../../model/ordered-player-entry.model';

@Component({
  selector: 'fc-ordered-players-entry',
  templateUrl: './ordered-players-entry.component.html',
  styleUrls: ['./ordered-players-entry.component.scss']
})
export class OrderedPlayersEntryComponent {
  @Input() player: OrderedPlayerEntry;
}
