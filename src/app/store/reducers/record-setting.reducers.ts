import {Action} from 'rxjs/internal/scheduler/Action';

import {createReducer, on} from '@ngrx/store';

import * as RecordSettingActions from '../actions/record-setting.actions';
import {RecordSettingState} from '../state/record-setting-state.model';

const initialState: RecordSettingState = {
  selectedType: null,
  sortAscOrDesc: false
};

const reducer = createReducer(
  initialState,
  on(RecordSettingActions.selectType, (state, { recordType }) => ({ ...state, selectedType: recordType })),
  on(RecordSettingActions.sort, (state, { sortAscOrDesc }) => ({ ...state, sortAscOrDesc })),
);

// @ts-ignore
export function recordSettingReducer(state: RecordSettingState | undefined, action: Action) {
  return reducer(state, action);
}
