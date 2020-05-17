import {createAction, props} from '@ngrx/store';

import {MemberDetails} from '../../model/member-details.model';

// tslint:disable:max-line-length
export const loadMemberDetails = createAction('[MemberDetail] Load member details', props<{ seoId: string }>());
export const memberDetailsLoaded = createAction('[MemberDetail] Member details loaded', props<{ memberDetails: MemberDetails }>());
// tslint:enable:max-line-length
