import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';

import * as MemberDetailSettingActions from '../../../store/actions/member-detail-setting.actions';
import {MemberDetailSettingState} from '../../../store/state/member-detail-setting-state.model';

@Injectable()
export class MemberDetailSettingStoreFacadeService {

  constructor(private store: Store<MemberDetailSettingState>) {
  }

  sortTournamentResults(sortTournamentResultsDateOrPlace: boolean): void {
    return this.store.dispatch(MemberDetailSettingActions.sortTournamentResults({ sortTournamentResultsDateOrPlace }));
  }
}
