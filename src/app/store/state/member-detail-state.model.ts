import {EntityState} from '@ngrx/entity';

import {MemberDetails} from '../../model/member-details.model';

export interface MemberDetailState extends EntityState<MemberDetails> { }
