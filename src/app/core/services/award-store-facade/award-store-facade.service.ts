import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {AwardYear} from '../../../model/awards-year.model';
import * as AwardActions from '../../../store/actions/award.actions';
import { getAwardYears } from '../../../store/selectors/aggregation.selectors';
import {AwardState} from '../../../store/state/award-state.model';

@Injectable()
export class AwardStoreFacadeService {

  constructor(private store: Store<AwardState>) {
  }

  getAwardYears(): Observable<AwardYear[]> {
    return this.store.select(getAwardYears);
  }

  loadAwards(): void {
    return this.store.dispatch(AwardActions.loadAwards());
  }
}
