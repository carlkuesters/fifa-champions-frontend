import {Action} from 'rxjs/internal/scheduler/Action';

import {createReducer, on} from '@ngrx/store';

import * as TournamentOverviewActions from '../actions/tournament-overview.actions';
import {TournamentOverviewState} from '../state/tournament-overview-state.model';

const initialState: TournamentOverviewState = {
  tournamentOverviews: null,
};

const reducer = createReducer(
  initialState,
  on(TournamentOverviewActions.tournamentOverviewLoaded, (state, { tournamentOverviews }) => ({ ...state, tournamentOverviews })),
);

// @ts-ignore
export function tournamentOverviewReducer(state: TournamentOverviewState | undefined, action: Action) {
  return reducer(state, action);
}
