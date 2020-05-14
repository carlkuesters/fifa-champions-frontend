import {createFeatureSelector, createSelector} from '@ngrx/store';

import {GeneralState} from '../state/general-state.model';

const getGeneralState = createFeatureSelector<GeneralState>('general');

export const getGeneralInformation = createSelector(
  getGeneralState, state => state.generalInformation
);

export const getHomeMessage = createSelector(
  getGeneralInformation, generalInformation => generalInformation ? generalInformation.homeMessage : null,
);

export const getTotalGoals = createSelector(
  getGeneralInformation, generalInformation => generalInformation ? generalInformation.goals : null,
);

export const getTotalMatches = createSelector(
  getGeneralInformation, generalInformation => generalInformation ? generalInformation.matches : null,
);

export const getTotalTournaments = createSelector(
  getGeneralInformation, generalInformation => generalInformation ? generalInformation.tournaments : null,
);
