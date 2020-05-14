import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap, withLatestFrom, filter} from 'rxjs/operators';

import {TournamentHttpService} from '../../core/services/tournament-http/tournament-http.service';
import * as TournamentOverviewActions from '../actions/tournament-overview.actions';
import {getTournamentYears} from '../selectors/tournament-overview.selectors';
import {TournamentOverviewState} from '../state/tournament-overview-state.model';

@Injectable()
export class TournamentOverviewEffects {

  constructor(
    private actions: Actions,
    private tournamentOverviewStore: Store<TournamentOverviewState>,
    private tournamentHttpService: TournamentHttpService,
  ) {}

  loadTournamentOverviews = createEffect(() => this.actions.pipe(
    ofType(TournamentOverviewActions.loadTournamentOverviews),
    withLatestFrom(this.tournamentOverviewStore.select(getTournamentYears)),
    filter(([_, tournamentYears]) => !tournamentYears),
    switchMap(() => this.tournamentHttpService.getTournamentOverviews().pipe(
      map(tournamentOverviews => TournamentOverviewActions.tournamentOverviewLoaded({ tournamentOverviews })),
      catchError(() => EMPTY)
    ))
  ));
}
