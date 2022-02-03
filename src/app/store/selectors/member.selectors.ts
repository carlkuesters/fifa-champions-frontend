import {createFeatureSelector, createSelector} from '@ngrx/store';

import {mapDisplayedMember} from '../../core/util/member/member.util';
import {DropdownOption} from '../../model/dropdown-option.model';
import {Member} from '../../model/member.model';
import {MemberState} from '../state/member-state.model';

const getMemberState = createFeatureSelector<MemberState>('member');

export const getMembers = createSelector(
  getMemberState, state => state.members,
);

export const getMembersCount = createSelector(
  getMembers, members => members ? members.filter(member => !member.guest).length : null,
);

const getSortedMembers = createSelector(
  getMembers, members => members
    ? members.slice().sort((member1, member2) => member1.name.localeCompare(member2.name))
    : [],
);

export const getDisplayedMembers = createSelector(
  getSortedMembers, members => members.filter(member => !member.guest).map(member => mapDisplayedMember(member)),
);

export const getMembersDropdownOptions = createSelector<MemberState, Member[], DropdownOption[]>(
  getSortedMembers, members => members.map(member => ({ value: member.id, title: member.name })),
);
