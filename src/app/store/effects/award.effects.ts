import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap, withLatestFrom, filter} from 'rxjs/operators';

import {AwardHttpService} from '../../core/services/award-http/award-http.service';
import * as AwardActions from '../actions/award.actions';
import {getAwards} from '../selectors/award.selectors';
import {AwardState} from '../state/award-state.model';

@Injectable()
export class AwardEffects {

  constructor(
    private actions: Actions,
    private awardStore: Store<AwardState>,
    private awardHttpService: AwardHttpService,
  ) {}

  loadAwards = createEffect(() => this.actions.pipe(
    ofType(AwardActions.loadAwards),
    withLatestFrom(this.awardStore.select(getAwards)),
    filter(([_, awards]) => !awards),
    switchMap(() => this.awardHttpService.getAwards().pipe(
      map(awards => AwardActions.awardsLoaded({ awards })),
      catchError(() => EMPTY)
    ))
  ));
}
