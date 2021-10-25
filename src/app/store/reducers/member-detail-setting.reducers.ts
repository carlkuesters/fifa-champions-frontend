import {Action} from 'rxjs/internal/scheduler/Action';

import {createReducer, on} from '@ngrx/store';

import * as MemberDetailSettingActions from '../actions/member-detail-setting.actions';
import {MemberDetailSettingState} from '../state/member-detail-setting-state.model';

const initialState: MemberDetailSettingState = {
  sortTournamentResultsDateOrPlace: true,
};

const reducer = createReducer(
  initialState,
  on(MemberDetailSettingActions.sortTournamentResults, (state, { sortTournamentResultsDateOrPlace }) => ({
    ...state,
    sortTournamentResultsDateOrPlace,
  })),
);

// @ts-ignore
export function memberDetailSettingReducer(state: MemberDetailSettingState | undefined, action: Action) {
  return reducer(state, action);
}
