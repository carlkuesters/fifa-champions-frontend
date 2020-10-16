import {createAction, props} from '@ngrx/store';

import {Ranking} from '../../model/ranking.model';

export const loadRankings = createAction('[Ranking] Load rankings');
export const rankingsLoaded = createAction('[Ranking] Rankings loaded', props<{ rankings: Ranking[] }>());
