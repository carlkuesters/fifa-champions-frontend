import {createAction, props} from '@ngrx/store';

import {TournamentOverview} from '../../model/tournament-overview.model';

export const loadTournamentOverviews = createAction('[TournamentOverview] Load tournament overviews');
export const tournamentOverviewLoaded = createAction('[Members] Tournament overviews loaded', props<{ tournamentOverviews: TournamentOverview[] }>());
