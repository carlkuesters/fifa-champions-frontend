import {TournamentMatchPlayer} from './tournament-match-player.model';

export class TournamentMatch {
  id: number;
  type: string;
  players: TournamentMatchPlayer[];
}
