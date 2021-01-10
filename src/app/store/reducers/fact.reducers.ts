import {Action} from 'rxjs/internal/scheduler/Action';

import {createReducer, on} from '@ngrx/store';

import * as FactActions from '../actions/fact.actions';
import {FactState} from '../state/fact-state.model';

const initialState: FactState = {
  fact: null
};

const reducer = createReducer(
  initialState,
  on(FactActions.randomFactLoaded, (state, { fact }) => ({ ...state, fact })),
);

// @ts-ignore
export function factReducer(state: FactState | undefined, action: Action) {
  return reducer(state, action);
}
