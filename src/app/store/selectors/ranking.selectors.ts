import {createFeatureSelector, createSelector} from '@ngrx/store';

import {parseSeoId} from '../../core/util/seo/seo.util';
import {RankingState} from '../state/ranking-state.model';

const getRankingState = createFeatureSelector<RankingState>('ranking');

export const getRankings = createSelector(
  getRankingState, state => state.rankings
);

export const getSortedRankings = createSelector(
  getRankings, rankings => {
    if (!rankings) {
      return null;
    }
    return rankings.map(ranking => {
      return {
        ...ranking,
        players: ranking.players.slice().sort((rankingPlayer1, rankingPlayer2) => rankingPlayer1.rank - rankingPlayer2.rank)
      };
    }).sort((ranking1, ranking2) => ranking2.date - ranking1.date);
  },
);

export const getSortedRankingIndexBySeoId = createSelector(
  getSortedRankings, (sortedRankings, props) => {
    if (sortedRankings) {
      const id = parseSeoId(props.seoId);
      for (let i = 0; i < sortedRankings.length; i++) {
        if (sortedRankings[i].id === id) {
          return i;
        }
      }
    }
    return null;
  },
);
