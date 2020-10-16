import {Component, Input} from '@angular/core';

import {DisplayedListRankingPlayer} from '../../../model/displayed-list-ranking-player.model';

@Component({
  selector: 'fc-ranking-list-entry-player',
  templateUrl: './ranking-list-entry-player.component.html',
  styleUrls: ['./ranking-list-entry-player.component.scss']
})
export class RankingListEntryPlayerComponent {
  @Input() rankingPlayer: DisplayedListRankingPlayer;
}
