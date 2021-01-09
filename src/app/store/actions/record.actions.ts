import {createAction, props} from '@ngrx/store';

import {Record} from '../../model/record.model';

export const loadRecords = createAction('[Record] Load records', props<{ recordType: string }>());
export const recordsLoaded = createAction('[Record] Records loaded', props<{ recordType: string, records: Record[] }>());
