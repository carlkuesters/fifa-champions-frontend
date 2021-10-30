import {DisplayedMemberDetails} from '../../../model/displayed-member-details.model';
import {DisplayedTournamentReference} from '../../../model/displayed-tournament-reference.model';
import {Member} from '../../../model/member.model';
import {MemberDetails} from '../../../model/member-details.model';
import {MemberDetailsHighestMatch} from '../../../model/member-details-highest-match.model';
import {MemberDetailsTournamentResult} from '../../../model/member-details-tournament-result.model';
import {MemberDetailsRanking} from '../../../model/member-details-ranking.model';
import {TournamentOverview} from '../../../model/tournament-overview.model';
import {AWARD_TITLES} from '../award/award.util';
import {formatDate} from '../date/date.util';
import {getMemberImage} from '../member/member.util';
import {generateSeoId} from '../seo/seo.util';
import {getTournamentTitle} from '../tournament-details/tournament-details.util';

export function mapDisplayedMemberDetails(
  memberDetails: MemberDetails,
  tournamentOverviews: TournamentOverview[],
  sortTournamentResultsDateOrPlace: boolean,
  members: Member[],
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
    formattedJoinDate: getFormattedDate_JoinDate(memberDetails.joinDate),
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
    highestWin: mapDisplayedHighestMatch(memberDetails.highestWin, tournamentOverviews, members),
    highestLoss: mapDisplayedHighestMatch(memberDetails.highestLoss, tournamentOverviews, members),
    routeDuel: '/duel/' + generateSeoId({ id: memberDetails.id, title: memberDetails.name }),
  };
}

function isBetterRanking(ranking1: MemberDetailsRanking, ranking2: MemberDetailsRanking): boolean {
  return ((ranking1.rank < ranking2.rank) || ((ranking1.rank === ranking2.rank) && (ranking1.date > ranking2.date)));
}

export function getFormattedDate_JoinDate(timestamp: number): string {
  return formatDate(timestamp, date => date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear());
}

export function mapDisplayedTournamentResults(
  tournamentResults: MemberDetailsTournamentResult[],
  tournamentOverviews: TournamentOverview[],
  sortDateOrPlace: boolean
): DisplayedTournamentReference[] {
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
        hintRight: null,
        hintBottom: tournamentOverview.location,
        routeTournament: '/tournament/' + tournamentOverview.id,
      };
    });
}

export function mapDisplayedHighestMatch(
  highestMatch: MemberDetailsHighestMatch,
  tournamentOverviews: TournamentOverview[],
  members: Member[],
): DisplayedTournamentReference {
  const tournamentOverview = tournamentOverviews.find(to => to.id === highestMatch.tournamentId);
  const opponent = members.find(m => m.id === highestMatch.opponentId);
  return {
    tournamentType: tournamentOverview.type,
    title: highestMatch.goalsOwn + ' : ' + highestMatch.goalsOpponent + ' gegen ' + opponent.name,
    hintRight: getTournamentTitle(tournamentOverview.type, tournamentOverview.date) + ', ' + tournamentOverview.location,
    hintBottom: null,
    routeTournament: '/tournament/' + tournamentOverview.id,
  };
}
