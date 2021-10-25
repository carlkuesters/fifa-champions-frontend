import {createFeatureSelector, createSelector} from '@ngrx/store';

import {mapTournamentYears} from '../../core/util/tournament-overview/tournament-overview.util';
import {TournamentOverviewState} from '../state/tournament-overview-state.model';

const getTournamentOverviewsState = createFeatureSelector<TournamentOverviewState>('tournamentOverview');

export const getTournamentOverviews = createSelector(
  getTournamentOverviewsState, state => state.tournamentOverviews
);

export const getTournamentCount = createSelector(
  getTournamentOverviews, tournamentsOverviews => tournamentsOverviews ? tournamentsOverviews.length : null
);

export const getTournamentYears = createSelector(
  getTournamentOverviews, tournamentsOverviews => {
    if (!tournamentsOverviews) {
      return null;
    }
    return mapTournamentYears(tournamentsOverviews);
  }
);
