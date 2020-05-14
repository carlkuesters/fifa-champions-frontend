import {TournamentOverview} from '../../../model/tournament-overview.model';
import {TournamentYear} from '../../../model/tournament-year.model';

export function mapTournamentYears(tournamentsOverviews: TournamentOverview[]): TournamentYear[] {
  const tournamentYears: TournamentYear[] = [];
  tournamentsOverviews.forEach(tournamentOverview => {
    const year = new Date(tournamentOverview.date * 1000).getFullYear();
    let tournamentYear = tournamentYears.find(ty => ty.year === year);
    if (!tournamentYear) {
      tournamentYear = {
        year,
        dfcCup: null,
        internationalTournament: null,
        euroLeague: null,
        championsLeague: null,
        otherTournaments: []
      };
      tournamentYears.push(tournamentYear);
    }
    switch (tournamentOverview.type) {
      case 'dfc_cup':
        tournamentYear.dfcCup = tournamentOverview;
        break;
      case 'european_championship':
      case 'world_championship':
        tournamentYear.internationalTournament = tournamentOverview;
        break;
      case 'euro_league':
        tournamentYear.euroLeague = tournamentOverview;
        break;
      case 'champions_league':
        tournamentYear.championsLeague = tournamentOverview;
        break;
      case 'monthly_tournament':
      case 'fun_tournament':
      case 'team_tournament':
        tournamentYear.otherTournaments.push(tournamentOverview);
        break;
    }
  });
  tournamentYears.sort((a, b) => (b.year - a.year));
  tournamentYears.forEach(tournamentYear => {
    tournamentYear.otherTournaments.sort((a, b) => (b.date - a.date));
  });
  return tournamentYears;
}
