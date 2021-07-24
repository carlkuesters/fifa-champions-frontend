import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {DisplayedDuel} from '../../../model/displayed-duel.model';
import {getDisplayedDuel} from '../../../store/selectors/aggregation.selectors';
import {DuelState} from '../../../store/state/duel-state.model';

@Injectable()
export class DuelStoreFacadeService {

  constructor(private store: Store<DuelState>) {
  }

  getDisplayedDuel(): Observable<DisplayedDuel> {
    return this.store.select(getDisplayedDuel);
  }
}
