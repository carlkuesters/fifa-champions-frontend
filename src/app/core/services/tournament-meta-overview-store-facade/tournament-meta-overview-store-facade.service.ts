import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {DisplayedIsolatedTournamentMeta} from '../../../model/displayed-isolated-tournament-meta.model';
import * as TournamentOverviewActions from '../../../store/actions/tournament-meta-overview.actions';
import { getDisplayedIsolatedTournamentMeta } from '../../../store/selectors/aggregation.selectors';
import { getTournamentMetaTotalCount } from '../../../store/selectors/tournament-meta-overview.selectors';
import {TournamentMetaOverviewState} from '../../../store/state/tournament-meta-overview-state.model';

@Injectable()
export class TournamentMetaOverviewStoreFacadeService {

  constructor(private store: Store<TournamentMetaOverviewState>) {
  }

  getDisplayedIsolatedTournamentMeta(metaType: string): Observable<DisplayedIsolatedTournamentMeta> {
    return this.store.select(getDisplayedIsolatedTournamentMeta, { metaType });
  }

  getTournamentMetaTotalCount(metaType: string): Observable<number> {
    return this.store.select(getTournamentMetaTotalCount, { metaType });
  }

  loadTournamentMetaOverview(metaType: string): void {
    return this.store.dispatch(TournamentOverviewActions.loadTournamentMetaOverview({ metaType }));
  }

  displayNextRandomTournamentMeta(metaType: string): void {
    return this.store.dispatch(TournamentOverviewActions.displayNextRandomTournamentMeta({ metaType }));
  }
}
