import {Duel} from '../../../model/duel.model';
import {DisplayedDuel} from '../../../model/displayed-duel.model';
import {DisplayedDuelMatch} from '../../../model/displayed-duel-match.model';
import {DuelMatch} from '../../../model/duel-match.model';
import {MATCH_CONSTANTS} from '../../../model/match.constants';
import {Member} from '../../../model/member.model';
import {TournamentOverview} from '../../../model/tournament-overview.model';
import {generateCombinedSeoId, parseCombinedSeoId} from '../seo/seo.util';
import {getTournamentTitle} from '../tournament-details/tournament-details.util';

const DUEL_SEO_ID_SEPARATOR = '-vs-';

export function generateDuelSeoId(memberIds: number[], members: Member[]): string {
  return generateCombinedSeoId(memberIds.map(memberId => {
    const member = members.find(m => m.id === memberId);
    return { id: member.id, title: member.name };
  }), DUEL_SEO_ID_SEPARATOR);
}

export function parseDuelSeoId(text: string): number[] {
  if (text) {
    const memberIds = parseCombinedSeoId(text, DUEL_SEO_ID_SEPARATOR);
    return ((memberIds.length === 1) ? [memberIds[0], null] : memberIds);
  }
  return [null, null];
}

export function mapDisplayedDuel(duel: Duel, members: Member[], tournamentOverviews: TournamentOverview[]): DisplayedDuel {
  const member1 = members.find(m => m.id === duel.memberId1);
  const member2 = members.find(m => m.id === duel.memberId2);

  let favourite;
  let favouritePercentageWin = getPercentage(duel.wins1, duel.matches);
  const favouritePercentageDraw = getPercentage(duel.draws, duel.matches);
  let favouritePercentageLoss = getPercentage(duel.wins2, duel.matches);
  if (duel.wins1 > duel.wins2) {
    favourite = member1.name;
  } else {
    favourite = ((duel.wins2 > duel.wins1) ? member2.name : 'Beide');
    const tmp = favouritePercentageWin;
    favouritePercentageWin = favouritePercentageLoss;
    favouritePercentageLoss = tmp;
  }

  let averageGoals1 = null;
  let averageGoals2 = null;
  if (duel.matches > 0) {
    averageGoals1 = Math.round(duel.goals1 / duel.matches);
    averageGoals2 = Math.round(duel.goals2 / duel.matches);
  }

  return {
    memberId1: member1.id,
    memberName1: member1.name,
    memberId2: member2.id,
    memberName2: member2.name,
    matches: duel.matches,
    wins1: duel.wins1,
    draws: duel.draws,
    wins2: duel.wins2,
    totalGoals: (duel.goals1 + duel.goals2),
    totalGoals1: duel.goals1,
    totalGoals2: duel.goals2,
    averageGoals1,
    averageGoals2,
    newestMatch: (duel.newestMatch ? mapDisplayedDuelMatch(duel.newestMatch, tournamentOverviews) : null),
    highestWin1: (duel.highestWin1 ? mapDisplayedDuelMatch(duel.highestWin1, tournamentOverviews) : null),
    highestWin2: (duel.highestWin2 ? mapDisplayedDuelMatch(duel.highestWin2, tournamentOverviews) : null),
    favourite,
    favouritePercentageWin,
    favouritePercentageDraw,
    favouritePercentageLoss,
  };
}

function getPercentage(part, total): number {
  if (total === 0) {
    return 0;
  }
  return Math.round((part / total) * 10000) / 100;
}

function mapDisplayedDuelMatch(duelMatch: DuelMatch, tournamentOverviews: TournamentOverview[]): DisplayedDuelMatch {
  const tournamentOverview = tournamentOverviews.find(to => to.id === duelMatch.tournamentId);
  return {
    goals1: duelMatch.goals1,
    goals2: duelMatch.goals2,
    tournamentTitle: getTournamentTitle(tournamentOverview.type, tournamentOverview.date),
    typeTitle: MATCH_CONSTANTS[duelMatch.type].title,
    routeTournament: '/tournament/' + tournamentOverview.id,
  };
}
