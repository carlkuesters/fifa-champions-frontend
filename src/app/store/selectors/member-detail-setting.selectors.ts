import {createFeatureSelector, createSelector} from '@ngrx/store';

import {MemberDetailSettingState} from '../state/member-detail-setting-state.model';

const getMemberDetailSettingState = createFeatureSelector<MemberDetailSettingState>('memberDetailSetting');

export const isSortTournamentResultsDateOrPlace = createSelector(
  getMemberDetailSettingState, state => state.sortTournamentResultsDateOrPlace
);
