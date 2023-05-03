import {createAction, props} from '@ngrx/store';

import {MemberDetails} from '../../model/member-details.model';

export const loadMemberDetails = createAction('[MemberDetail] Load member details', props<{ seoId: string }>());
export const memberDetailsLoaded = createAction('[MemberDetail] Member details loaded', props<{ memberDetails: MemberDetails }>());
