import {TournamentOverview} from './tournament-overview.model';

export class TournamentYear {
  year: number;
  dfcCup: TournamentOverview;
  internationalTournament: TournamentOverview;
  euroLeague: TournamentOverview;
  championsLeague: TournamentOverview;
  otherTournaments: TournamentOverview[];
}
