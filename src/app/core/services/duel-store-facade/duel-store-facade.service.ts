import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {DisplayedDuel} from '../../../model/displayed-duel.model';
import * as DuelActions from '../../../store/actions/duel.actions';
import {getDisplayedDuel} from '../../../store/selectors/aggregation.selectors';
import {DuelState} from '../../../store/state/duel-state.model';

@Injectable()
export class DuelStoreFacadeService {

  constructor(private store: Store<DuelState>) {
  }

  getDisplayedDuel(duelSeoId: string): Observable<DisplayedDuel> {
    return this.store.select(getDisplayedDuel, { duelSeoId });
  }

  loadDuel(duelSeoId: string): void {
    return this.store.dispatch(DuelActions.loadDuel({ duelSeoId }));
  }
}
