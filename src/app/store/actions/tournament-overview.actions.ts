import {createAction, props} from '@ngrx/store';

import {TournamentOverview} from '../../model/tournament-overview.model';

// tslint:disable:max-line-length
export const loadTournamentOverviews = createAction('[TournamentOverview] Load tournament overviews');
export const tournamentOverviewLoaded = createAction('[Members] Tournament overviews loaded', props<{ tournamentOverviews: TournamentOverview[] }>());
// tslint:enable:max-line-length
