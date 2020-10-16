import {Action} from 'rxjs/internal/scheduler/Action';

import {createReducer, on} from '@ngrx/store';

import * as MemberActions from '../actions/member.actions';
import {MemberState} from '../state/member-state.model';

const initialState: MemberState = {
  members: null,
};

const reducer = createReducer(
  initialState,
  on(MemberActions.membersLoaded, (state, { members }) => ({ ...state, members })),
);

// @ts-ignore
export function memberReducer(state: MemberState | undefined, action: Action) {
  return reducer(state, action);
}
