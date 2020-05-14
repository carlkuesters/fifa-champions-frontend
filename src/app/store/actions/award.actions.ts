import {createAction, props} from '@ngrx/store';

import {Award} from '../../model/award.model';

export const loadAwards = createAction('[Award] Load awards');
export const awardsLoaded = createAction('[Awawrd] Awards loaded', props<{ awards: Award[] }>());
