import {createEntityAdapter} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';

import {
  createTournamentMetaOverview,
  displayNextRandomTournamentMeta
} from '../../core/util/tournament-meta-overview/tournament-meta-overview.util';
import * as IsolatedTournamentMetaActions from '../actions/tournament-meta-overview.actions';
import {TournamentMetaOverviewState} from '../state/tournament-meta-overview-state.model';
import {TournamentMetaOverview} from '../../model/tournament-meta-overview.model';

export const tournamentMetaOverviewAdapter = createEntityAdapter<TournamentMetaOverview>({
  selectId: tournamentMetaOverview => tournamentMetaOverview.type
});

const initialState = tournamentMetaOverviewAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(IsolatedTournamentMetaActions.isolatedTournamentMetasLoaded, (state, { metaType, isolatedTournamentMetas }) => {
    return tournamentMetaOverviewAdapter.addOne(createTournamentMetaOverview(metaType, isolatedTournamentMetas), state);
  }),
  on(IsolatedTournamentMetaActions.displayNextRandomTournamentMeta, (state, { metaType }) => {
    return tournamentMetaOverviewAdapter.updateOne({
      id: metaType,
      changes: displayNextRandomTournamentMeta(state.entities[metaType])
    }, state);
  }),
);

// @ts-ignore
export function tournamentMetaOverviewReducer(state: TournamentMetaOverviewState | undefined, action: Action) {
  return reducer(state, action);
}
