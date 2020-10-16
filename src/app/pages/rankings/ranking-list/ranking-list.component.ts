import {Component, Input} from '@angular/core';

import {DisplayedListRanking} from '../../../model/displayed-list-ranking.model';

@Component({
  selector: 'fc-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.scss']
})
export class RankingListComponent {
  @Input() rankings: DisplayedListRanking[];
}
