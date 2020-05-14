import {createEntityAdapter} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';

import {TournamentDetails} from '../../model/tournament-details.model';
import * as TournamentDetailActions from '../actions/tournament-detail.actions';
import {TournamentDetailState} from '../state/tournament-detail-state.model';

export const tournamentDetailsAdapter = createEntityAdapter<TournamentDetails>();

const initialState = tournamentDetailsAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(TournamentDetailActions.tournamentDetailsLoaded, (state, { tournamentDetails }) => {
    return tournamentDetailsAdapter.addOne(tournamentDetails, state);
  }),
);

// @ts-ignore
export function tournamentDetailReducer(state: TournamentDetailState | undefined, action: Action) {
  return reducer(state, action);
}
