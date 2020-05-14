import {createFeatureSelector, createSelector} from '@ngrx/store';

import {tournamentMetaOverviewAdapter} from '../reducers/tournament-meta-overview.reducers';
import {TournamentMetaOverviewState} from '../state/tournament-meta-overview-state.model';

const getTournamentMetaOverviewState = createFeatureSelector<TournamentMetaOverviewState>('tournamentMetaOverview');

const entitySelectors = tournamentMetaOverviewAdapter.getSelectors();

const getEntities = createSelector(
  getTournamentMetaOverviewState,
  entitySelectors.selectEntities
);

export const getTournamentMetaOverview = createSelector(
  getEntities, (entities, props) => entities[props.metaType],
);

export const getDisplayedTournamentMetaOverviewMeta = createSelector(
  getTournamentMetaOverview, tournamentMetaOverview => tournamentMetaOverview ? tournamentMetaOverview.displayedMeta : null,
);

export const getTournamentMetaTotalCount = createSelector(
  getTournamentMetaOverview, tournamentMetaOverview => tournamentMetaOverview ? tournamentMetaOverview.allMetas.length : null,
);
