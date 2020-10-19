import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {MemberStoreFacadeService} from '../../core/services/member-store-facade/member-store-facade.service';
import {RankingStoreFacadeService} from '../../core/services/ranking-store-facade/ranking-store-facade.service';
import {DisplayedChartRanking} from '../../model/displayed-chart-ranking.model';
import {DisplayedDetailsRanking} from '../../model/displayed-details-ranking.model';
import {DisplayedListRanking} from '../../model/displayed-list-ranking.model';

@Component({
  selector: 'fc-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements OnInit {

  newestRanking: Observable<DisplayedDetailsRanking>;
  chartRankings: Observable<DisplayedChartRanking[]>;
  allRankings: Observable<DisplayedListRanking[]>;

  constructor(private rankingStoreFacadeService: RankingStoreFacadeService,
              private memberStoreFacadeService: MemberStoreFacadeService) {
  }

  ngOnInit(): void {
    this.newestRanking = this.rankingStoreFacadeService.getNewestDisplayedDetailsRanking();
    this.chartRankings = this.rankingStoreFacadeService.getDisplayedChartRankings();
    this.allRankings = this.rankingStoreFacadeService.getSortedDisplayedListRankings();

    this.rankingStoreFacadeService.loadRankings();
    this.memberStoreFacadeService.loadMembers();
  }
}
