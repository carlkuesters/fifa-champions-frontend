import {Action} from 'rxjs/internal/scheduler/Action';

import {createReducer, on} from '@ngrx/store';

import * as AwardActions from '../actions/award.actions';
import {AwardState} from '../state/award-state.model';

const initialState: AwardState = {
  awards: null,
};

const reducer = createReducer(
  initialState,
  on(AwardActions.awardsLoaded, (state, { awards }) => ({ ...state, awards })),
);

// @ts-ignore
export function awardReducer(state: AwardState | undefined, action: Action) {
  return reducer(state, action);
}
