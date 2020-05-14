import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, catchError, switchMap, withLatestFrom, filter} from 'rxjs/operators';

import {GeneralHttpService} from '../../core/services/general-http/general-http.service';
import * as GeneralActions from '../actions/general.actions';
import {getTotalTournaments} from '../selectors/general.selectors';
import {GeneralState} from '../state/general-state.model';

@Injectable()
export class GeneralEffects {

  constructor(
    private actions: Actions,
    private generalStore: Store<GeneralState>,
    private generalHttpService: GeneralHttpService,
  ) {}

  loadGeneralInformation = createEffect(() => this.actions.pipe(
    ofType(GeneralActions.loadGeneralInformation),
    withLatestFrom(this.generalStore.select(getTotalTournaments)),
    filter(([_, tournaments]) => !tournaments),
    switchMap(() => this.generalHttpService.getGeneralInformation().pipe(
      map(generalInformation => GeneralActions.generalInformationLoaded({ generalInformation })),
      catchError(() => EMPTY)
    ))
  ));
}
