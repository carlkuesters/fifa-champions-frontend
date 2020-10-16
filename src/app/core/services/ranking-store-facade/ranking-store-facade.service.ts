import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {DisplayedDetailsRanking} from '../../../model/displayed-details-ranking.model';
import {DisplayedListRanking} from '../../../model/displayed-list-ranking.model';
import * as RankingActions from '../../../store/actions/ranking.actions';
import {
  getDisplayedDetailsRankingBySeoId,
  getNewestDisplayedDetailsRanking,
  getSortedDisplayedListRankings
} from '../../../store/selectors/aggregation.selectors';
import {RankingState} from '../../../store/state/ranking-state.model';

@Injectable()
export class RankingStoreFacadeService {

  constructor(private store: Store<RankingState>) {
  }

  getSortedDisplayedListRankings(): Observable<DisplayedListRanking[]> {
    return this.store.select(getSortedDisplayedListRankings);
  }

  getNewestDisplayedDetailsRanking(): Observable<DisplayedDetailsRanking> {
    return this.store.select(getNewestDisplayedDetailsRanking);
  }

  getDisplayedDetailsRanking(seoId: string): Observable<DisplayedDetailsRanking> {
    return this.store.select(getDisplayedDetailsRankingBySeoId, { seoId });
  }

  loadRankings(): void {
    return this.store.dispatch(RankingActions.loadRankings());
  }
}
