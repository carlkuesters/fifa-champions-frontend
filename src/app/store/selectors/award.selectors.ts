import {createFeatureSelector, createSelector} from '@ngrx/store';

import {AwardState} from '../state/award-state.model';

const getAwardState = createFeatureSelector<AwardState>('award');

export const getAwards = createSelector(
  getAwardState, state => state.awards
);
