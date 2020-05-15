import {DisplayedTournamentGroup} from './displayed-tournament-group.model';
import {DisplayedTournamentMatches} from './displayed-tournament-matches.model';
import {DisplayedTournamentMeta} from './displayed-tournament-meta.model';

export class DisplayedTournamentDetails {
  title: string;
  location: string;
  groups: DisplayedTournamentGroup[];
  matches: DisplayedTournamentMatches;
  meta: {[type: string]: DisplayedTournamentMeta[]};
}
