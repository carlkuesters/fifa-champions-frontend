import {createAction, props} from '@ngrx/store';

import {Member} from '../../model/member.model';

export const loadMembers = createAction('[Members] Load members');
export const membersLoaded = createAction('[Members] Members loaded', props<{ members: Member[] }>());
