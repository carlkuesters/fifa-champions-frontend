import {createFeatureSelector, createSelector} from '@ngrx/store';

import {recordAdapter} from '../reducers/record.reducers';
import {RecordState} from '../state/record-state.model';

const getRecordState = createFeatureSelector<RecordState>('record');

const entitySelectors = recordAdapter.getSelectors();

export const getRecordEntities = createSelector(
  getRecordState,
  entitySelectors.selectEntities
);

export const getRecords = createSelector(
  getRecordEntities, (entities, props) => entities[props.recordType],
);
