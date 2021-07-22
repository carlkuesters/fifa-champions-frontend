import {createFeatureSelector, createSelector} from '@ngrx/store';

import {parseDuelSeoId} from '../../core/util/duel/duel.util';
import {duelAdapter, getDuelId} from '../reducers/duel.reducers';
import {DuelState} from '../state/duel-state.model';

const getDuelState = createFeatureSelector<DuelState>('duel');

const entitySelectors = duelAdapter.getSelectors();

const getEntities = createSelector(
  getDuelState,
  entitySelectors.selectEntities
);

export const getDuelBySeoId = createSelector(
  getEntities, (entities, props) => {
    const memberIds = parseDuelSeoId(props.duelSeoId);
    return entities[getDuelId(memberIds[0], memberIds[1])];
  },
);

export const getDuelByMemberIds = createSelector(
  getEntities, (entities, props) => entities[getDuelId(props.memberId1, props.memberId2)],
);
