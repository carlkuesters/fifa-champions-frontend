import {TournamentEntry} from '../../../model/tournament-entry.model';

export class TournamentYear {
  year: number;
  dfcCup: TournamentEntry;
  internationalTournament: TournamentEntry;
  euroLeague: TournamentEntry;
  championsLeague: TournamentEntry;
  otherTournaments: TournamentEntry[];
}
