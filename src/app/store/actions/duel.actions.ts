import {createAction, props} from '@ngrx/store';

import {Duel} from '../../model/duel.model';

export const loadDuel = createAction('[Duel] Load duel by member ids', props<{ memberId1: number, memberId2: number }>());
export const duelLoaded = createAction('[Duel] Duel loaded', props<{ duel: Duel }>());
