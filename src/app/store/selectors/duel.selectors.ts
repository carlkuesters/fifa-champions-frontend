import {createFeatureSelector, createSelector} from '@ngrx/store';

import {duelAdapter, getDuelId} from '../reducers/duel.reducers';
import {DuelState} from '../state/duel-state.model';

const getDuelState = createFeatureSelector<DuelState>('duel');

const entitySelectors = duelAdapter.getSelectors();

export const getDuelEntities = createSelector(
  getDuelState,
  entitySelectors.selectEntities
);

export const getDuelByMemberIds = createSelector(
  getDuelEntities, (entities, props) => entities[getDuelId(props.memberId1, props.memberId2)],
);
