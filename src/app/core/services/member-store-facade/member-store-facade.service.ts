import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {DisplayedMember} from '../../../model/displayed-member.model';
import {DropdownOption} from '../../../model/dropdown-option.model';
import * as MemberActions from '../../../store/actions/member.actions';
import {getDisplayedMembers, getMembersCount, getMembersDropdownOptions} from '../../../store/selectors/member.selectors';
import {MemberState} from '../../../store/state/member-state.model';

@Injectable()
export class MemberStoreFacadeService {

  constructor(private store: Store<MemberState>) {
  }

  getMembersCount(): Observable<number> {
    return this.store.select(getMembersCount);
  }

  getDisplayedMembers(): Observable<DisplayedMember[]> {
    return this.store.select(getDisplayedMembers);
  }

  getMembersDropdownOptions(): Observable<DropdownOption[]> {
    return this.store.select(getMembersDropdownOptions);
  }

  loadMembers(): void {
    return this.store.dispatch(MemberActions.loadMembers());
  }
}
