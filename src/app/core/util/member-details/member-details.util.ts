import {DisplayedMemberDetails} from '../../../model/displayed-member-details.model';
import {MemberDetails} from '../../../model/member-details.model';
import {MemberDetailsRanking} from '../../../model/member-details-ranking.model';
import {AWARD_TITLES} from '../award/award.util';
import {getMemberImage} from '../member/member.util';

export function mapDisplayedMemberDetails(memberDetails: MemberDetails): DisplayedMemberDetails {
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
  };
}

function isBetterRanking(ranking1: MemberDetailsRanking, ranking2: MemberDetailsRanking): boolean {
  return ((ranking1.rank < ranking2.rank) || ((ranking1.rank === ranking2.rank) && (ranking1.date > ranking2.date)));
}
