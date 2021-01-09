import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {map, switchMap, filter} from 'rxjs/operators';

import * as RecordActions from '../actions/record.actions';
import * as RecordSettingActions from '../actions/record-setting.actions';
import {getRecords} from '../selectors/record.selectors';
import {RecordState} from '../state/record-state.model';

@Injectable()
export class RecordSettingEffects {

  constructor(
    private actions: Actions,
    private recordStore: Store<RecordState>
  ) {}

  loadRecordsIfNotExisting = createEffect(() => this.actions.pipe(
    ofType(RecordSettingActions.selectType),
    switchMap(({ recordType }) => this.recordStore.select(getRecords, { recordType }).pipe(
      filter(records => !records),
      map(() => RecordActions.loadRecords({ recordType })),
    )),
  ));
}
