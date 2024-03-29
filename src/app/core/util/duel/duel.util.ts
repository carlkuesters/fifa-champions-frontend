import {Duel} from '../../../model/duel.model';
import {DisplayedDuel} from '../../../model/displayed-duel.model';
import {DisplayedTournamentReference} from '../../../model/displayed-tournament-reference.model';
import {DuelMatch} from '../../../model/duel-match.model';
import {MATCH_CONSTANTS} from '../../../model/match.constants';
import {Member} from '../../../model/member.model';
import {TournamentOverview} from '../../../model/tournament-overview.model';
import {generateCombinedSeoId, parseCombinedSeoId} from '../seo/seo.util';
import {getFormattedDate_Tournament} from '../tournament-details/tournament-details.util';

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

  let averageGoals1 = null;
  let averageGoals2 = null;
  if (duel.matches.length > 0) {
    averageGoals1 = Math.round(duel.goals1 / duel.matches.length);
    averageGoals2 = Math.round(duel.goals2 / duel.matches.length);
  }

  let favouriteByMatches;
  let favouriteByMatchesPercentageWin = getPercentage(duel.wins1, duel.matches.length);
  const favouriteByMatchesPercentageDraw = getPercentage(duel.draws, duel.matches.length);
  let favouriteByMatchesPercentageLoss = getPercentage(duel.wins2, duel.matches.length);
  if (duel.wins1 > duel.wins2) {
    favouriteByMatches = member1.name;
  } else {
    favouriteByMatches = ((duel.wins2 > duel.wins1) ? member2.name : 'Beide');
    const tmp = favouriteByMatchesPercentageWin;
    favouriteByMatchesPercentageWin = favouriteByMatchesPercentageLoss;
    favouriteByMatchesPercentageLoss = tmp;
  }

  let favouriteByElo;
  let favouriteByEloWinProbability;
  if (duel.eloWinProbability1 > duel.eloWinProbability2) {
    favouriteByElo = member1.name;
    favouriteByEloWinProbability = duel.eloWinProbability1;
  } else {
    favouriteByElo = ((duel.eloWinProbability2 > duel.eloWinProbability1) ? member2.name : 'Beide');
    favouriteByEloWinProbability = duel.eloWinProbability2;
  }

  return {
    memberId1: member1.id,
    memberName1: member1.name,
    memberId2: member2.id,
    memberName2: member2.name,
    wins1: duel.wins1,
    draws: duel.draws,
    wins2: duel.wins2,
    totalGoals: (duel.goals1 + duel.goals2),
    totalGoals1: duel.goals1,
    totalGoals2: duel.goals2,
    averageGoals1,
    averageGoals2,
    highestWin1: (duel.highestWin1 ? mapDisplayedDuelMatch(duel.highestWin1, tournamentOverviews) : null),
    highestWin2: (duel.highestWin2 ? mapDisplayedDuelMatch(duel.highestWin2, tournamentOverviews) : null),
    favouriteByMatches,
    favouriteByMatchesPercentageWin,
    favouriteByMatchesPercentageDraw,
    favouriteByMatchesPercentageLoss,
    favouriteByElo,
    favouriteByEloPercentageWin: Number((favouriteByEloWinProbability * 100).toFixed(2)),
    matches: duel.matches.map(match => mapDisplayedDuelMatch(match, tournamentOverviews)),
  };
}

function getPercentage(part: number, total: number): number {
  if (total === 0) {
    return 0;
  }
  return Math.round((part / total) * 10000) / 100;
}

function mapDisplayedDuelMatch(duelMatch: DuelMatch, tournamentOverviews: TournamentOverview[]): DisplayedTournamentReference {
  const tournamentOverview = tournamentOverviews.find(to => to.id === duelMatch.tournamentId);
  return {
    tournamentType: tournamentOverview.type,
    title: duelMatch.goals1 + ' : ' + duelMatch.goals2,
    hintRight:
      MATCH_CONSTANTS[duelMatch.type].title
      + ' ' + getFormattedDate_Tournament(tournamentOverview.type, tournamentOverview.date)
      + (tournamentOverview.location ? ', ' + tournamentOverview.location : ''),
    hintBottom: null,
    routeTournament: '/tournament/' + tournamentOverview.id,
  };
}
