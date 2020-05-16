import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {TournamentYear} from '../../../model/tournament-year.model';
import * as TournamentOverviewActions from '../../../store/actions/tournament-overview.actions';
import { getTournamentCount, getTournamentYears } from '../../../store/selectors/tournament-overview.selectors';
import {TournamentOverviewState} from '../../../store/state/tournament-overview-state.model';

@Injectable()
export class TournamentOverviewStoreFacadeService {

  constructor(private store: Store<TournamentOverviewState>) {
  }

  getTournamentCount(): Observable<number> {
    return this.store.select(getTournamentCount);
  }

  getTournamentYears(): Observable<TournamentYear[]> {
    return this.store.select(getTournamentYears);
  }

  loadTournamentOverviews(): void {
    return this.store.dispatch(TournamentOverviewActions.loadTournamentOverviews());
  }
}
