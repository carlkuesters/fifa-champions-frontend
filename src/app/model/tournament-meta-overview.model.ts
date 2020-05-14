import {IsolatedTournamentMeta} from './isolated-tournament-meta.model';

export class TournamentMetaOverview {
  type: string;
  allMetas: IsolatedTournamentMeta[];
  remainingNewMetas: IsolatedTournamentMeta[];
  displayedMeta: IsolatedTournamentMeta;
}
