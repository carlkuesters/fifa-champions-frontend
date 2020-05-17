import {createEntityAdapter} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';

import {MemberDetails} from '../../model/member-details.model';
import * as MemberDetailActions from '../actions/member-detail.actions';
import {MemberDetailState} from '../state/member-detail-state.model';

export const memberDetailsAdapter = createEntityAdapter<MemberDetails>();

const initialState = memberDetailsAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(MemberDetailActions.memberDetailsLoaded, (state, { memberDetails }) => {
    return memberDetailsAdapter.addOne(memberDetails, state);
  }),
);

// @ts-ignore
export function memberDetailReducer(state: MemberDetailState | undefined, action: Action) {
  return reducer(state, action);
}
