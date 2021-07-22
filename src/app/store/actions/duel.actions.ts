import {createAction, props} from '@ngrx/store';

import {Duel} from '../../model/duel.model';

export const loadDuel = createAction('[Duel] Load duel', props<{ duelSeoId: string }>());
export const duelLoaded = createAction('[Duel] Duel loaded', props<{ duel: Duel }>());
