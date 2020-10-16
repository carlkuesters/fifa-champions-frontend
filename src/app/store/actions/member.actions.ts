import {createAction, props} from '@ngrx/store';

import {Member} from '../../model/member.model';

export const loadMembers = createAction('[Member] Load members');
export const membersLoaded = createAction('[Member] Members loaded', props<{ members: Member[] }>());
