import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap, filter} from 'rxjs/operators';

import {DuelHttpService} from '../../core/services/duel-http/duel-http.service';
import {parseDuelSeoId} from '../../core/util/duel/duel.util';
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

  loadDuel = createEffect(() => this.actions.pipe(
    ofType(DuelActions.loadDuel),
    map(({ duelSeoId }) => parseDuelSeoId(duelSeoId)),
    switchMap(memberIds => this.duelStore.select(getDuelByMemberIds, { memberId1: memberIds[0], memberId2: memberIds[1] }).pipe(
        filter(duel => !duel),
        switchMap(() => this.duelHttpService.getDuel(memberIds[0], memberIds[1]).pipe(
          map(duel => DuelActions.duelLoaded({ duel })),
          catchError(() => EMPTY)
        ))
    )),
  ));
}
