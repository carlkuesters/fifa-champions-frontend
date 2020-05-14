import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap, filter} from 'rxjs/operators';

import * as IsolatedTournamentMetaActions from '../actions/tournament-meta-overview.actions';
import {getTournamentMetaOverview} from '../selectors/tournament-meta-overview.selectors';
import {TournamentHttpService} from '../../core/services/tournament-http/tournament-http.service';
import {TournamentMetaOverviewState} from '../state/tournament-meta-overview-state.model';

@Injectable()
export class TournamentMetaOverviewEffects {

  constructor(
    private actions: Actions,
    private isolatedTournamentMetaStore: Store<TournamentMetaOverviewState>,
    private tournamentHttpService: TournamentHttpService,
  ) {}

  loadTournamentMetaOverview = createEffect(() => this.actions.pipe(
    ofType(IsolatedTournamentMetaActions.loadTournamentMetaOverview),
    switchMap(({ metaType }) => this.isolatedTournamentMetaStore.select(getTournamentMetaOverview, { metaType }).pipe(
        filter(tournamentMetaOverview => !tournamentMetaOverview),
        switchMap(() => this.tournamentHttpService.getIsolatedTournamentMetas(metaType).pipe(
          map(isolatedTournamentMetas => IsolatedTournamentMetaActions.isolatedTournamentMetasLoaded({
            metaType, isolatedTournamentMetas
          })),
          catchError(() => EMPTY)
        ))
    )),
  ));
}
