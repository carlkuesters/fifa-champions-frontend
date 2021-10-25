import {DisplayedMemberDetails} from '../../../model/displayed-member-details.model';
import {DisplayedMemberDetailsTournamentResult} from '../../../model/displayed-member-details-tournament-result.model';
import {MemberDetails} from '../../../model/member-details.model';
import {MemberDetailsTournamentResult} from '../../../model/member-details-tournament-result.model';
import {MemberDetailsRanking} from '../../../model/member-details-ranking.model';
import {TournamentOverview} from '../../../model/tournament-overview.model';
import {AWARD_TITLES} from '../award/award.util';
import {getMemberImage} from '../member/member.util';
import {generateSeoId} from '../seo/seo.util';
import {getTournamentTitle} from '../tournament-details/tournament-details.util';

export function mapDisplayedMemberDetails(
  memberDetails: MemberDetails,
  tournamentOverviews: TournamentOverview[],
  sortTournamentResultsDateOrPlace: boolean,
): DisplayedMemberDetails {
  let latestRanking = null;
  let bestRanking = null;
  memberDetails.rankings.forEach(ranking => {
    if (!latestRanking || (ranking.date > latestRanking.date)) {
      latestRanking = ranking;
    }
    if (!bestRanking || isBetterRanking(ranking, bestRanking)) {
      bestRanking = ranking;
    }
  });
  const allRankings = memberDetails.rankings.slice().sort((a, b) => b.date - a.date);
  const awards = memberDetails.awards.slice()
    .sort((a, b) => b.year - a.year)
    .map(award => {
      return {
        title: AWARD_TITLES[award.type],
        year: award.year
      };
    });

  return {
    name: memberDetails.name,
    joinDate: memberDetails.joinDate,
    image: getMemberImage(memberDetails.id),
    tournaments: memberDetails.tournaments,
    matches: memberDetails.matches,
    wins: memberDetails.wins,
    draws: memberDetails.draws,
    losses: memberDetails.losses,
    goalsShot: memberDetails.goalsShot,
    goalsReceived: memberDetails.goalsReceived,
    description: memberDetails.description,
    allRankings,
    latestRanking,
    bestRanking,
    awards,
    tournamentResults:
      mapDisplayedTournamentResults(memberDetails.tournamentResults, tournamentOverviews, sortTournamentResultsDateOrPlace),
    highestWin: null,
    highestLoss: null,
    routeDuel: '/duel/' + generateSeoId({ id: memberDetails.id, title: memberDetails.name }),
  };
}

export function mapDisplayedTournamentResults(
  tournamentResults: MemberDetailsTournamentResult[],
  tournamentOverviews: TournamentOverview[],
  sortDateOrPlace: boolean
): DisplayedMemberDetailsTournamentResult[] {
  return tournamentResults
    .slice()
    .sort((tournamentResult1, tournamentResult2) => {
      if (sortDateOrPlace) {
        // Backend response is already sorted by date
        return 0;
      } else {
        return (tournamentResult1.place - tournamentResult2.place);
      }
    })
    .map(tournamentResult => {
      const tournamentOverview = tournamentOverviews.find(to => to.id === tournamentResult.tournamentId);
      return {
        tournamentType: tournamentOverview.type,
        title: tournamentResult.place + '. Platz ' + getTournamentTitle(tournamentOverview.type, tournamentOverview.date),
        location: tournamentOverview.location,
        routeTournament: '/tournament/' + tournamentOverview.id,
      };
    });
}

function isBetterRanking(ranking1: MemberDetailsRanking, ranking2: MemberDetailsRanking): boolean {
  return ((ranking1.rank < ranking2.rank) || ((ranking1.rank === ranking2.rank) && (ranking1.date > ranking2.date)));
}
