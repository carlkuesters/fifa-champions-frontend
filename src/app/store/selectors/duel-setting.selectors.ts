import {createFeatureSelector, createSelector} from '@ngrx/store';

import {DuelSettingState} from '../state/duel-setting-state.model';

const getDuelSettingState = createFeatureSelector<DuelSettingState>('duelSetting');

export const getDuelMemberId1 = createSelector(
  getDuelSettingState, state => state.memberId1
);

export const getDuelMemberId2 = createSelector(
  getDuelSettingState, state => state.memberId2
);
