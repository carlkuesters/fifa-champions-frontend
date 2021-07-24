import {Action} from 'rxjs/internal/scheduler/Action';

import {createReducer, on} from '@ngrx/store';

import * as DuelSettingAction from '../actions/duel-setting.actions';
import {DuelSettingState} from '../state/duel-setting-state.model';

const initialState: DuelSettingState = {
  memberId1: null,
  memberId2: null,
};

const reducer = createReducer(
  initialState,
  on(DuelSettingAction.selectMembers, (state, { memberId1, memberId2 }) => ({ ...state, memberId1, memberId2 })),
);

// @ts-ignore
export function duelSettingReducer(state: DuelSettingState | undefined, action: Action) {
  return reducer(state, action);
}
