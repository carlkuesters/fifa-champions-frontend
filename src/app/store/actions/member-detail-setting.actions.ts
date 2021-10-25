import {createAction, props} from '@ngrx/store';

export const sortTournamentResults = createAction('[MemberDetailSetting] Sort tournament results', props<{
  sortTournamentResultsDateOrPlace: boolean,
}>());
