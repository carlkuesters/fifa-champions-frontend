import {createFeatureSelector, createSelector} from '@ngrx/store';

import {FactState} from '../state/fact-state.model';

const getFactState = createFeatureSelector<FactState>('fact');

export const getFact = createSelector(
  getFactState, state => state.fact
);
