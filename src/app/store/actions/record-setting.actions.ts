import {createAction, props} from '@ngrx/store';

export const selectType = createAction('[RecordSetting] Select type', props<{ recordType: string }>());
export const sort = createAction('[RecordSetting] Sort', props<{ sortAscOrDesc: boolean }>());
