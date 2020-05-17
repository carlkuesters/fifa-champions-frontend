import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap, filter} from 'rxjs/operators';

import {parseSeoId} from '../../core/util/seo/seo.util';
import * as MemberDetailActions from '../actions/member-detail.actions';
import {getMemberDetails} from '../selectors/member-detail.selectors';
import {MemberDetailState} from '../state/member-detail-state.model';
import {MemberHttpService} from '../../core/services/member-http/member-http.service';

@Injectable()
export class MemberDetailEffects {

  constructor(
    private actions: Actions,
    private memberDetailStore: Store<MemberDetailState>,
    private memberHttpService: MemberHttpService,
  ) {}

  loadMemberDetails = createEffect(() => this.actions.pipe(
    ofType(MemberDetailActions.loadMemberDetails),
    switchMap(({ seoId }) => this.memberDetailStore.select(getMemberDetails, { seoId }).pipe(
        filter(member => !member),
        switchMap(() => this.memberHttpService.getMemberDetails(parseSeoId(seoId)).pipe(
          map(memberDetails => MemberDetailActions.memberDetailsLoaded({ memberDetails })),
          catchError(() => EMPTY)
        ))
    )),
  ));
}
