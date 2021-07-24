import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap, filter} from 'rxjs/operators';

import {DuelHttpService} from '../../core/services/duel-http/duel-http.service';
import * as DuelActions from '../actions/duel.actions';
import {getDuelByMemberIds} from '../selectors/duel.selectors';
import {DuelState} from '../state/duel-state.model';

@Injectable()
export class DuelEffects {

  constructor(
    private actions: Actions,
    private duelStore: Store<DuelState>,
    private duelHttpService: DuelHttpService,
  ) {}

  loadDuelIfNotExisting = createEffect(() => this.actions.pipe(
    ofType(DuelActions.loadDuel),
    switchMap(({ memberId1, memberId2 }) => this.duelStore.select(getDuelByMemberIds, { memberId1, memberId2 }).pipe(
        filter(duel => !duel),
        switchMap(() => this.duelHttpService.getDuel(memberId1, memberId2).pipe(
          map(duel => DuelActions.duelLoaded({ duel })),
          catchError(() => EMPTY)
        ))
    )),
  ));
}
