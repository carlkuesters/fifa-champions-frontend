import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs';

import {MemberStoreFacadeService} from '../../core/services/member-store-facade/member-store-facade.service';
import {RankingStoreFacadeService} from '../../core/services/ranking-store-facade/ranking-store-facade.service';
import {DisplayedDetailsRanking} from '../../model/displayed-details-ranking.model';

@Component({
  selector: 'fc-ranking',
  templateUrl: './ranking.component.html'
})
export class RankingComponent implements OnInit {

  ranking: Observable<DisplayedDetailsRanking>;

  constructor(private activatedRoute: ActivatedRoute,
              private rankingStoreFacadeService: RankingStoreFacadeService,
              private memberStoreFacadeService: MemberStoreFacadeService) {
  }

  ngOnInit(): void {
    const seoId = this.activatedRoute.snapshot.paramMap.get('rankingSeoId');
    this.ranking = this.rankingStoreFacadeService.getDisplayedDetailsRanking(seoId);

    this.rankingStoreFacadeService.loadRankings();
    this.memberStoreFacadeService.loadMembers();
  }
}
