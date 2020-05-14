import {createAction, props} from '@ngrx/store';

import {TournamentDetails} from '../../model/tournament-details.model';

// tslint:disable:max-line-length
export const loadTournamentDetails = createAction('[TournamentDetail] Load tournament details', props<{ seoId: string }>());
export const tournamentDetailsLoaded = createAction('[TournamentDetail] Tournament details loaded', props<{ tournamentDetails: TournamentDetails }>());
// tslint:enable:max-line-length
