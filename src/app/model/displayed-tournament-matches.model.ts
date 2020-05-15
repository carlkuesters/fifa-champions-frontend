import {DisplayedTournamentMatchPlayer} from './displayed-tournament-match-player.model';

export interface DisplayedTournamentMatches {
  [matchType: string]: DisplayedTournamentMatchPlayer[][];
}
