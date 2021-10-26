import {createEntityAdapter} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';

import {Duel} from '../../model/duel.model';
import * as DuelActions from '../actions/duel.actions';
import {DuelState} from '../state/duel-state.model';

export const duelAdapter = createEntityAdapter<Duel>({
  selectId: duel => getDuelId(duel.memberId1, duel.memberId2),
});

export function getDuelId(memberId1: number, memberId2: number): string {
  // TODO: Duels can be reused for mirror requests, but the GUI has to clearly display who is player1 and player2
  /*let smallMemberId;
  let bigMemberId;
  if (memberId1 < memberId2) {
    smallMemberId = memberId1;
    bigMemberId = memberId2;
  } else {
    smallMemberId = memberId2;
    bigMemberId = memberId1;
  }
  return smallMemberId + '_' + bigMemberId;*/
  return memberId1 + '_' + memberId2;
}

const initialState = duelAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(DuelActions.duelLoaded, (state, { duel }) => {
    return duelAdapter.addOne(duel, state);
  }),
);

// @ts-ignore
export function duelReducer(state: DuelState | undefined, action: Action) {
  return reducer(state, action);
}
