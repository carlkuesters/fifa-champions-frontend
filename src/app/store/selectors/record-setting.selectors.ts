import {createFeatureSelector, createSelector} from '@ngrx/store';

import {RecordSettingState} from '../state/record-setting-state.model';

const getRecordSettingState = createFeatureSelector<RecordSettingState>('recordSetting');

export const getSelectedRecordType = createSelector(
  getRecordSettingState, state => state.selectedType
);

export const isRecordSortAscOrDesc = createSelector(
  getRecordSettingState, state => state.sortAscOrDesc
);
