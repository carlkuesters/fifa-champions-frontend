import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';

import {generateDuelSeoId, parseDuelSeoId} from '../../core/util/duel/duel.util';
import * as DuelActions from '../actions/duel.actions';
import * as DuelSettingActions from '../actions/duel-setting.actions';
import * as MemberActions from '../actions/member.actions';
import {getDuelMemberId1, getDuelMemberId2} from '../selectors/duel-setting.selectors';
import {getMembers} from '../selectors/member.selectors';
import {DuelSettingState} from '../state/duel-setting-state.model';
import {MemberState} from '../state/member-state.model';

@Injectable()
export class DuelSettingEffects {

  constructor(
    private actions: Actions,
    private duelSettingStore: Store<DuelSettingState>,
    private memberStore: Store<MemberState>,
    private router: Router,
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

  loadDuelAndSetRouteOnMembersSelected = createEffect(() => this.actions.pipe(
    ofType(
      MemberActions.membersLoaded,
      DuelSettingActions.selectMembers
    ),
    withLatestFrom(
      this.duelSettingStore.select(getDuelMemberId1),
      this.duelSettingStore.select(getDuelMemberId2),
      this.memberStore.select(getMembers),
    ),
    switchMap(([_, memberId1, memberId2, members]) => {
      if (members) {
        if (memberId1 && memberId2) {
          const duelSeoId = generateDuelSeoId(memberId1, memberId2, members);
          this.router.navigate(['duel/' + duelSeoId]);
          return [DuelActions.loadDuel({ memberId1, memberId2 })];
        } else if (this.router.url.startsWith('/duel/')) {
          this.router.navigate(['duel']);
        }
      }
      return [];
    }),
  ));
}
