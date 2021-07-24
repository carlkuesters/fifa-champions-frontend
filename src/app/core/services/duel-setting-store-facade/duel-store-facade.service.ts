import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';

import * as DuelSettingActions from '../../../store/actions/duel-setting.actions';
import {DuelSettingState} from '../../../store/state/duel-setting-state.model';

@Injectable()
export class DuelSettingStoreFacadeService {

  constructor(private store: Store<DuelSettingState>) {
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
