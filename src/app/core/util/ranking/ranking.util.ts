import {DisplayedDetailsRanking} from '../../../model/displayed-details-ranking.model';
import {DisplayedListRanking} from '../../../model/displayed-list-ranking.model';
import {Member} from '../../../model/member.model';
import {Ranking} from '../../../model/ranking.model';
import {RankingPlayer} from '../../../model/ranking-player.model';
import {formatDate, MONTH_NAMES, padDayOrMonth} from '../date/date.util';
import {getMemberImage} from '../member/member.util';

export function mapDisplayedDetailsRanking(
  sortedRankings: Ranking[],
  sortedRankingIndex: number,
  members: Member[]
): DisplayedDetailsRanking {
  const ranking = sortedRankings[sortedRankingIndex];
  const previousRanking = sortedRankings[sortedRankingIndex + 1];
  const title = 'FC-Weltrangliste (' + getFormattedDate_Details(ranking) + ')';
  const players = ranking.players.map(rankingPlayer => {
    const member = members.find(m => m.id === rankingPlayer.playerId);
    return {
      id: rankingPlayer.playerId,
      name: member.name,
      image: getMemberImage(member.id, 32),
      rank: rankingPlayer.rank,
      rankChange: getRankChange(rankingPlayer, previousRanking),
      text: rankingPlayer.text
    }
  });
  return {
    title,
    players
  };
}

function getFormattedDate_Details(ranking: Ranking): string {
  return formatDate(ranking.date, date => date.getDate() + '. ' + MONTH_NAMES[date.getMonth()] + ' ' + date.getFullYear());
}

function getRankChange(rankingPlayer: RankingPlayer, previousRanking: Ranking): string {
  if (previousRanking) {
    const previousRankingPlayer = previousRanking.players.find(pRP => pRP.playerId === rankingPlayer.playerId);
    if (previousRankingPlayer) {
      const rankChange = (previousRankingPlayer.rank - rankingPlayer.rank);
      if (rankChange !== 0) {
        return '(' + ((rankChange > 0) ? '+' : '') + rankChange + ')';
      }
    }
  }
  return '';
}


export function mapDisplayedListRanking(sortedRanking: Ranking, members: Member[]): DisplayedListRanking {
  const formattedDate = getFormattedDate_List(sortedRanking);
  const players = sortedRanking.players.slice(0, 5).map(rankingPlayer => {
    const member = members.find(m => m.id === rankingPlayer.playerId);
    return {
      id: rankingPlayer.playerId,
      name: member.name,
      image: getMemberImage(member.id, 32),
      rank: rankingPlayer.rank
    }
  });
  return {
    id: sortedRanking.id,
    formattedDate,
    players
  };
}

function getFormattedDate_List(ranking: Ranking): string {
  return formatDate(ranking.date, date => {
    return padDayOrMonth(date.getDate()) + '.' + padDayOrMonth(date.getMonth() + 1) + '.' + date.getFullYear();
  });
}
