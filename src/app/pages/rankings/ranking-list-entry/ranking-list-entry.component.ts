import {Component, Input} from '@angular/core';

import {DisplayedListRanking} from '../../../model/displayed-list-ranking.model';

@Component({
  selector: 'fc-ranking-list-entry',
  templateUrl: './ranking-list-entry.component.html',
  styleUrls: ['./ranking-list-entry.component.scss']
})
export class RankingListEntryComponent {
  @Input() ranking: DisplayedListRanking;
}
