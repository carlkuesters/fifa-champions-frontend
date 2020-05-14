import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap, filter} from 'rxjs/operators';

import {parseSeoId} from '../../core/util/seo/seo.util';
import * as TournamentDetailActions from '../actions/tournament-detail.actions';
import {getTournamentDetails} from '../selectors/tournament-detail.selectors';
import {TournamentDetailState} from '../state/tournament-detail-state.model';
import {TournamentHttpService} from '../../core/services/tournament-http/tournament-http.service';

@Injectable()
export class TournamentDetailEffects {

  constructor(
    private actions: Actions,
    private tournamentDetailStore: Store<TournamentDetailState>,
    private tournamentHttpService: TournamentHttpService,
  ) {}

  loadTournamentDetails = createEffect(() => this.actions.pipe(
    ofType(TournamentDetailActions.loadTournamentDetails),
    switchMap(({ seoId }) => this.tournamentDetailStore.select(getTournamentDetails, { seoId }).pipe(
        filter(tournament => !tournament),
        switchMap(() => this.tournamentHttpService.getTournamentDetails(parseSeoId(seoId)).pipe(
          map(tournamentDetails => TournamentDetailActions.tournamentDetailsLoaded({ tournamentDetails })),
          catchError(() => EMPTY)
        ))
    )),
  ));
}
