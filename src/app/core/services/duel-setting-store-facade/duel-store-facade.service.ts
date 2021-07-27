import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as DuelSettingActions from '../../../store/actions/duel-setting.actions';
import {getDuelMemberId1, getDuelMemberId2} from '../../../store/selectors/duel-setting.selectors';
import {DuelSettingState} from '../../../store/state/duel-setting-state.model';

@Injectable()
export class DuelSettingStoreFacadeService {

  constructor(private store: Store<DuelSettingState>) {
  }

  getDuelMemberId1(): Observable<number> {
    return this.store.select(getDuelMemberId1);
  }

  getDuelMemberId2(): Observable<number> {
    return this.store.select(getDuelMemberId2);
  }

  selectMembersBySeoId(duelSeoId: string): void {
    return this.store.dispatch(DuelSettingActions.selectMembersBySeoId({ duelSeoId }));
  }

  selectMember1(memberId: number): void {
    return this.store.dispatch(DuelSettingActions.selectMember1({ memberId }));
  }

  selectMember2(memberId: number): void {
    return this.store.dispatch(DuelSettingActions.selectMember2({ memberId }));
  }
}
