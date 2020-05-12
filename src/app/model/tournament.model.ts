import {TournamentPlayer} from './tournament-player.model';
import {TournamentMeta} from './tournament-meta.model';
import {TournamentResults} from './tournament-results.model';

export class Tournament {
  id: number;
  type: string;
  location: string;
  date: number;
  players: TournamentPlayer[];
  meta: {[type: string]: TournamentMeta[]};
  results: TournamentResults;
}
