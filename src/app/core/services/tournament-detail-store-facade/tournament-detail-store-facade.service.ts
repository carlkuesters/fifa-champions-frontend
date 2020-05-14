import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {DisplayedTournamentDetails} from '../../../model/displayed-tournament-details.model';
import * as TournamentDetailActions from '../../../store/actions/tournament-detail.actions';
import { getDisplayedTournamentDetails } from '../../../store/selectors/aggregation.selectors';
import {TournamentDetailState} from '../../../store/state/tournament-detail-state.model';

@Injectable()
export class TournamentDetailStoreFacadeService {

  constructor(private store: Store<TournamentDetailState>) {
  }

  getDisplayedTournamentDetails(seoId: string): Observable<DisplayedTournamentDetails> {
    return this.store.select(getDisplayedTournamentDetails, { seoId });
  }

  loadTournamentDetails(seoId: string): void {
    return this.store.dispatch(TournamentDetailActions.loadTournamentDetails({ seoId }));
  }
}
