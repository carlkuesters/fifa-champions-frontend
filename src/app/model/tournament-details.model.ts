import {Location} from './location.model';
import {TournamentMeta} from './tournament-meta.model';
import {TournamentPlayer} from './tournament-player.model';
import {TournamentResults} from './tournament-results.model';

export class TournamentDetails {
  id: number;
  type: string;
  location: Location;
  date: number;
  players: TournamentPlayer[];
  meta: {[type: string]: TournamentMeta[]};
  results: TournamentResults;
}
