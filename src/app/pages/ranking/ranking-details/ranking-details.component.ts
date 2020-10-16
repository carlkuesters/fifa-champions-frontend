import {Component, Input} from '@angular/core';

import {DisplayedDetailsRanking} from '../../../model/displayed-details-ranking.model';

@Component({
  selector: 'fc-ranking-details',
  templateUrl: './ranking-details.component.html',
  styleUrls: ['./ranking-details.component.scss']
})
export class RankingDetailsComponent {
  @Input() ranking: DisplayedDetailsRanking;
}
