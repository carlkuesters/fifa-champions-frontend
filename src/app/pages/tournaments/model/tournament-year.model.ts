import {Tournament} from '../../../model/tournament.model';

export class TournamentYear {
  year: number;
  dfcCup: Tournament;
  internationalTournament: Tournament;
  euroLeague: Tournament;
  championsLeague: Tournament;
  otherTournaments: Tournament[];
}
