import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap, withLatestFrom, filter} from 'rxjs/operators';

import {MemberHttpService} from '../../core/services/member-http/member-http.service';
import * as MemberActions from '../actions/member.actions';
import {getMembers} from '../selectors/member.selectors';
import {MemberState} from '../state/member-state.model';

@Injectable()
export class MemberEffects {

  constructor(
    private actions: Actions,
    private memberStore: Store<MemberState>,
    private memberHttpService: MemberHttpService,
  ) {}

  loadMembers = createEffect(() => this.actions.pipe(
    ofType(MemberActions.loadMembers),
    withLatestFrom(this.memberStore.select(getMembers)),
    filter(([_, members]) => !members),
    switchMap(() => this.memberHttpService.getMembers().pipe(
      map(members => MemberActions.membersLoaded({ members })),
      catchError(() => EMPTY)
    ))
  ));
}
