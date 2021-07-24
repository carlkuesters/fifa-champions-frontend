import {Duel} from '../../../model/duel.model';
import {Member} from '../../../model/member.model';
import {DisplayedDuel} from '../../../model/displayed-duel.model';
import {DisplayedDuelMatch} from '../../../model/displayed-duel-match.model';
import {DuelMatch} from '../../../model/duel-match.model';
import {formatDate, MONTH_NAMES} from '../date/date.util';
import {generateCombinedSeoId, parseCombinedSeoId} from '../seo/seo.util';

const DUEL_SEO_ID_SEPARATOR = '-vs-';

export function generateDuelSeoId(memberId1: number, memberId2: number, members: Member[]): string {
  const member1 = members.find(m => m.id === memberId1);
  const member2 = members.find(m => m.id === memberId2);
  return generateCombinedSeoId([
    { id: member1.id, title: member1.name },
    { id: member2.id, title: member2.name },
  ], DUEL_SEO_ID_SEPARATOR);
}

export function parseDuelSeoId(text: string): number[] {
  return parseCombinedSeoId(text, DUEL_SEO_ID_SEPARATOR);
}

export function mapDisplayedDuel(duel: Duel, members: Member[]): DisplayedDuel {
  const member1 = members.find(m => m.id === duel.memberId1);
  const member2 = members.find(m => m.id === duel.memberId2);
  return {
    memberId1: member1.id,
    memberName1: member1.name,
    memberId2: member2.id,
    memberName2: member2.name,
    matches: duel.matches,
    wins1: duel.wins1,
    draws: duel.draws,
    wins2: duel.wins2,
    goals1: duel.goals1,
    goals2: duel.goals2,
    newestMatch: (duel.newestMatch ? mapDisplayedDuelMatch(duel.newestMatch) : null),
  };
}

function mapDisplayedDuelMatch(duelMatch: DuelMatch): DisplayedDuelMatch {
  return {
    goals1: duelMatch.goals1,
    goals2: duelMatch.goals2,
    formattedDate: getFormattedDate_DuelMatch(duelMatch.date),
  };
}

function getFormattedDate_DuelMatch(timestamp: number): string {
  return formatDate(timestamp, date => date.getDate() + '. ' + MONTH_NAMES[date.getMonth()] + ' ' + date.getFullYear());
}
