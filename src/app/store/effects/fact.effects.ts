import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap} from 'rxjs/operators';

import {FactHttpService} from '../../core/services/fact-http/fact-http.service';
import * as FactActions from '../actions/fact.actions';
import {FactState} from '../state/fact-state.model';

@Injectable()
export class FactEffects {

  constructor(
    private actions: Actions,
    private factStore: Store<FactState>,
    private factHttpService: FactHttpService,
  ) {}

  loadRandomFact = createEffect(() => this.actions.pipe(
    ofType(FactActions.loadRandomFact),
    switchMap(() => this.factHttpService.getRandomFact().pipe(
      map(fact => FactActions.randomFactLoaded({ fact })),
      catchError(() => EMPTY)
    ))
  ));
}
