import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {OrderedPlayerEntry} from '../../../model/ordered-player-entry.model';
import {getDisplayedRecords} from '../../../store/selectors/aggregation.selectors';
import {RecordState} from '../../../store/state/record-state.model';

@Injectable()
export class RecordStoreFacadeService {

  constructor(private store: Store<RecordState>) {
  }

  getDisplayedRecords(): Observable<OrderedPlayerEntry[]> {
    return this.store.select(getDisplayedRecords);
  }
}
