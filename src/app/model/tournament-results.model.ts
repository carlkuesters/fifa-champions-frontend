import {TournamentGroupPlayer} from './tournament-group-player.model';
import {TournamentMatch} from './tournament-match.model';

export class TournamentResults {
  matches: TournamentMatch[];
  groups: TournamentGroupPlayer[][];
}
