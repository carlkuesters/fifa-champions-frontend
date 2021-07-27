import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {filter, map, withLatestFrom} from 'rxjs/operators';

import {parseDuelSeoId} from '../../core/util/duel/duel.util';
import * as DuelActions from '../actions/duel.actions';
import * as DuelSettingActions from '../actions/duel-setting.actions';
import {getDuelMemberId1, getDuelMemberId2} from '../selectors/duel-setting.selectors';
import {DuelSettingState} from '../state/duel-setting-state.model';

@Injectable()
export class DuelSettingEffects {

  constructor(
    private actions: Actions,
    private duelSettingStore: Store<DuelSettingState>,
  ) {}

  selectMembersBySeoId = createEffect(() => this.actions.pipe(
    ofType(DuelSettingActions.selectMembersBySeoId),
    map(({ duelSeoId }) => {
      const memberIds = parseDuelSeoId(duelSeoId);
      return DuelSettingActions.selectMembers({ memberId1: memberIds[0], memberId2: memberIds[1] });
    }),
  ));

  selectMember1 = createEffect(() => this.actions.pipe(
    ofType(DuelSettingActions.selectMember1),
    withLatestFrom(this.duelSettingStore.select(getDuelMemberId2)),
    map((([{ memberId }, memberId2]) => DuelSettingActions.selectMembers({ memberId1: memberId, memberId2 })),
  )));

  selectMember2 = createEffect(() => this.actions.pipe(
    ofType(DuelSettingActions.selectMember2),
    withLatestFrom(this.duelSettingStore.select(getDuelMemberId1)),
    map((([{ memberId }, memberId1]) => DuelSettingActions.selectMembers({ memberId1, memberId2: memberId })),
  )));

  loadDuelOnMembersSelected = createEffect(() => this.actions.pipe(
    ofType(DuelSettingActions.selectMembers),
    filter(({ memberId1, memberId2 }) => Boolean(memberId1 && memberId2)),
    map(({ memberId1, memberId2 }) => DuelActions.loadDuel({ memberId1, memberId2 })),
  ));
}
