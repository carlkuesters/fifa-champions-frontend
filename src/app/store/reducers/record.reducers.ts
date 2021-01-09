import {createEntityAdapter} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';

import * as RecordActions from '../actions/record.actions';
import {RecordState} from '../state/record-state.model';
import {Records} from '../../model/records.model';

export const recordAdapter = createEntityAdapter<Records>({
  selectId: (records: Records) => records.type,
});

const initialState = recordAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(RecordActions.recordsLoaded, (state, { recordType, records }) => {
    return recordAdapter.addOne({ type: recordType, records }, state);
  }),
);

// @ts-ignore
export function recordReducer(state: RecordState | undefined, action: Action) {
  return reducer(state, action);
}
