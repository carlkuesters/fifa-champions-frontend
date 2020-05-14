import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {Member} from '../../../model/member.model';
import * as MemberActions from '../../../store/actions/member.actions';
import { getMembers, getMembersCount } from '../../../store/selectors/member.selectors';
import {MemberState} from '../../../store/state/member-state.model';

@Injectable()
export class MemberStoreFacadeService {

  constructor(private store: Store<MemberState>) {
  }

  getMembers(): Observable<Member[]> {
    return this.store.select(getMembers);
  }

  getMembersCount(): Observable<number> {
    return this.store.select(getMembersCount);
  }

  loadMembers(): void {
    return this.store.dispatch(MemberActions.loadMembers());
  }
}
