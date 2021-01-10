import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {DisplayedFact} from '../../../model/displayed-member-info.model';
import * as FactActions from '../../../store/actions/fact.actions';
import {getDisplayedFact} from '../../../store/selectors/aggregation.selectors';
import {FactState} from '../../../store/state/fact-state.model';

@Injectable()
export class FactStoreFacadeService {

  constructor(private store: Store<FactState>) {
  }

  getDisplayedFact(): Observable<DisplayedFact> {
    return this.store.select(getDisplayedFact);
  }

  loadRandomFact(): void {
    return this.store.dispatch(FactActions.loadRandomFact());
  }
}
