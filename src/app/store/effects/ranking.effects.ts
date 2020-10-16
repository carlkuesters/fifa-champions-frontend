import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap, withLatestFrom, filter} from 'rxjs/operators';

import {RankingHttpService} from '../../core/services/ranking-http/ranking-http.service';
import * as RankingActions from '../actions/ranking.actions';
import {getRankings} from '../selectors/ranking.selectors';
import {RankingState} from '../state/ranking-state.model';

@Injectable()
export class RankingEffects {

  constructor(
    private actions: Actions,
    private rankingStore: Store<RankingState>,
    private rankingHttpService: RankingHttpService,
  ) {}

  loadRankings = createEffect(() => this.actions.pipe(
    ofType(RankingActions.loadRankings),
    withLatestFrom(this.rankingStore.select(getRankings)),
    filter(([_, rankings]) => !rankings),
    switchMap(() => this.rankingHttpService.getRankings().pipe(
      map(rankings => RankingActions.rankingsLoaded({ rankings })),
      catchError(() => EMPTY)
    ))
  ));
}
