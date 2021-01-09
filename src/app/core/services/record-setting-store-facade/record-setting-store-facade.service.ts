import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as RecordSettingActions from '../../../store/actions/record-setting.actions';
import {isRecordSortAscOrDesc, getSelectedRecordType} from '../../../store/selectors/record-setting.selectors';
import {RecordSettingState} from '../../../store/state/record-setting-state.model';

@Injectable()
export class RecordSettingStoreFacadeService {

  constructor(private store: Store<RecordSettingState>) {
  }

  getSelectedRecordType(): Observable<string> {
    return this.store.select(getSelectedRecordType);
  }

  isRecordSortAscOrDesc(): Observable<boolean> {
    return this.store.select(isRecordSortAscOrDesc);
  }

  selectType(recordType: string): void {
    return this.store.dispatch(RecordSettingActions.selectType({ recordType }));
  }

  sort(sortAscOrDesc: boolean): void {
    return this.store.dispatch(RecordSettingActions.sort({ sortAscOrDesc }));
  }
}
