import {createAction, props} from '@ngrx/store';

export const selectMembersBySeoId = createAction('[DuelSetting] Select members by seo id', props<{ duelSeoId: string }>());
export const selectMember1 = createAction('[DuelSetting] Select member 1', props<{ memberId: number }>());
export const selectMember2 = createAction('[DuelSetting] Select member 2', props<{ memberId: number }>());
export const selectMembers = createAction('[DuelSetting] Select members', props<{ memberId1: number, memberId2: number }>());
