import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {DisplayedMemberDetails} from '../../../model/displayed-member-details.model';
import * as MemberDetailActions from '../../../store/actions/member-detail.actions';
import { getDisplayedMemberDetails } from '../../../store/selectors/aggregation.selectors';
import {MemberDetailState} from '../../../store/state/member-detail-state.model';

@Injectable()
export class MemberDetailStoreFacadeService {

  constructor(private store: Store<MemberDetailState>) {
  }

  getDisplayedMemberDetails(seoId: string): Observable<DisplayedMemberDetails> {
    return this.store.select(getDisplayedMemberDetails, { seoId });
  }

  loadMemberDetails(seoId: string): void {
    return this.store.dispatch(MemberDetailActions.loadMemberDetails({ seoId }));
  }
}
