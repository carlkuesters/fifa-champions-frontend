import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, switchMap, catchError} from 'rxjs/operators';

import {RecordHttpService} from '../../core/services/record-http/record-http.service';
import * as RecordActions from '../actions/record.actions';
import {RecordState} from '../state/record-state.model';

@Injectable()
export class RecordEffects {

  constructor(
    private actions: Actions,
    private recordStore: Store<RecordState>,
    private recordHttpService: RecordHttpService
  ) {}

  loadRecords = createEffect(() => this.actions.pipe(
    ofType(RecordActions.loadRecords),
    switchMap(({ recordType }) => this.recordHttpService.getRecords(recordType).pipe(
      map(records => RecordActions.recordsLoaded({ recordType, records })),
      catchError(() => EMPTY)
    ))
  ));
}
