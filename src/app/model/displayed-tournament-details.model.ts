import {DisplayedTournamentGroup} from './displayed-tournament-group.model';
import {TournamentMeta} from './tournament-meta.model';
import {TournamentResults} from './tournament-results.model';

export class DisplayedTournamentDetails {
  title: string;
  location: string;
  groups: DisplayedTournamentGroup[];
  meta: {[type: string]: TournamentMeta[]};
  results: TournamentResults;
}
