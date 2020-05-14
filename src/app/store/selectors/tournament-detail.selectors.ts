import {createFeatureSelector, createSelector} from '@ngrx/store';

import {parseSeoId} from '../../core/util/seo/seo.util';
import {tournamentDetailsAdapter} from '../reducers/tournament-detail.reducers';
import {TournamentDetailState} from '../state/tournament-detail-state.model';

const getTournamentDetailState = createFeatureSelector<TournamentDetailState>('tournamentDetail');

const entitySelectors = tournamentDetailsAdapter.getSelectors();

const getEntities = createSelector(
  getTournamentDetailState,
  entitySelectors.selectEntities
);

export const getTournamentDetails = createSelector(
  getEntities, (entities, props) => entities[parseSeoId(props.seoId)],
);
