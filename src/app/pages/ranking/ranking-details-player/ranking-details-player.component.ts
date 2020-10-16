import {Component, Input} from '@angular/core';

import {DisplayedDetailsRankingPlayer} from '../../../model/displayed-details-ranking-player.model';

@Component({
  selector: 'fc-ranking-details-player',
  templateUrl: './ranking-details-player.component.html',
  styleUrls: ['./ranking-details-player.component.scss']
})
export class RankingDetailsPlayerComponent {
  @Input() rankingPlayer: DisplayedDetailsRankingPlayer;
}
