import {createFeatureSelector, createSelector} from '@ngrx/store';

import {mapDisplayedMember} from '../../core/util/member/member.util';
import {MemberState} from '../state/member-state.model';

const getMemberState = createFeatureSelector<MemberState>('member');

export const getMembers = createSelector(
  getMemberState, state => state.members
);

export const getMembersCount = createSelector(
  getMembers, members => members ? members.length : null,
);

export const getDisplayedMembers = createSelector(
  getMembers, members => members ? members.map(member => mapDisplayedMember(member)) : null,
);
