import {createAction, props} from '@ngrx/store';

import {IsolatedTournamentMeta} from '../../model/isolated-tournament-meta.model';

export const loadTournamentMetaOverview = createAction('[TournamentOverviewMeta] Load tournament meta overview', props<{ metaType: string }>());
export const isolatedTournamentMetasLoaded = createAction('[TournamentOverviewMeta] Isolated tournament metas loaded', props<{ metaType: string, isolatedTournamentMetas: IsolatedTournamentMeta[] }>());
export const displayNextRandomTournamentMeta = createAction('[TournamentOverviewMeta] Display next random tournament meta', props<{ metaType: string }>());
