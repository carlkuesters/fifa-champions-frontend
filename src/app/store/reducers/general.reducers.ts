import {Action} from 'rxjs/internal/scheduler/Action';

import {createReducer, on} from '@ngrx/store';

import * as GeneralActions from '../actions/general.actions';
import {GeneralState} from '../state/general-state.model';

const initialState: GeneralState = {
  generalInformation: null,
};

const reducer = createReducer(
  initialState,
  on(GeneralActions.generalInformationLoaded, (state, { generalInformation }) => ({ ...state, generalInformation })),
);

// @ts-ignore
export function generalReducer(state: GeneralState | undefined, action: Action) {
  return reducer(state, action);
}
