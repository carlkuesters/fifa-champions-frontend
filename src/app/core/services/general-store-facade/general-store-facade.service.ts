import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as GeneralActions from '../../../store/actions/general.actions';
import { getHomeMessage, getTotalGoals, getTotalMatches, getTotalTournaments } from '../../../store/selectors/general.selectors';
import {GeneralState} from '../../../store/state/general-state.model';

@Injectable()
export class GeneralStoreFacadeService {

  constructor(private store: Store<GeneralState>) {
  }

  getHomeMessage(): Observable<string> {
    return this.store.select(getHomeMessage);
  }

  getTotalGoals(): Observable<number> {
    return this.store.select(getTotalGoals);
  }

  getTotalMatches(): Observable<number> {
    return this.store.select(getTotalMatches);
  }

  getTotalTournaments(): Observable<number> {
    return this.store.select(getTotalTournaments);
  }

  loadGeneralInformation(): void {
    return this.store.dispatch(GeneralActions.loadGeneralInformation());
  }
}
