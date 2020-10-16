import {Action} from 'rxjs/internal/scheduler/Action';

import {createReducer, on} from '@ngrx/store';

import * as RankingActions from '../actions/ranking.actions';
import {RankingState} from '../state/ranking-state.model';

const initialState: RankingState = {
  rankings: null,
};

const reducer = createReducer(
  initialState,
  on(RankingActions.rankingsLoaded, (state, { rankings }) => ({ ...state, rankings })),
);

// @ts-ignore
export function rankingReducer(state: RankingState | undefined, action: Action) {
  return reducer(state, action);
}
