import {createSelector} from '@ngrx/store';

import {mapAwardYears} from '../../core/util/award/award.util';
import {mapDisplayedMemberDetails} from '../../core/util/member-details/member-details.util';
import {
  mapDisplayedListRanking,
  mapDisplayedChartRankings,
  mapDisplayedDetailsRanking
} from '../../core/util/ranking/ranking.util';
import {mapDisplayedRecords} from '../../core/util/record/record.util';
import {mapDisplayedTournamentDetails} from '../../core/util/tournament-details/tournament-details.util';
import {mapDisplayedIsolatedTournamentMeta} from '../../core/util/tournament-meta-overview/tournament-meta-overview.util';
import {getAwards} from './award.selectors';
import {getMembers} from './member.selectors';
import {getMemberDetails} from './member-detail.selectors';
import {getSortedRankingIndexBySeoId, getSortedRankings} from './ranking.selectors';
import {getRecordEntities} from './record.selectors';
import {getSelectedRecordType, isRecordSortAscOrDesc} from './record-setting.selectors';
import {getTournamentDetails} from './tournament-detail.selectors';
import {getDisplayedTournamentMetaOverviewMeta} from './tournament-meta-overview.selectors';

export const getDisplayedMemberDetails = createSelector(
  getMemberDetails, memberDetails => {
    if (!memberDetails) {
      return null;
    }
    return mapDisplayedMemberDetails(memberDetails);
  },
);

export const getDisplayedTournamentDetails = createSelector(
  getTournamentDetails, getMembers, (tournamentDetails, members) => {
    if (!tournamentDetails || !members) {
      return null;
    }
    return mapDisplayedTournamentDetails(tournamentDetails, members);
  },
);

export const getAwardYears = createSelector(
  getAwards, getMembers, (awards, members) => {
    if (!awards || !members) {
      return null;
    }
    return mapAwardYears(awards, members);
  }
);

export const getDisplayedIsolatedTournamentMeta = createSelector(
  getDisplayedTournamentMetaOverviewMeta, getMembers, (isolatedTournamentMeta, members) => {
    if (!isolatedTournamentMeta || !members) {
      return null;
    }
    return mapDisplayedIsolatedTournamentMeta(isolatedTournamentMeta, members);
  },
);

export const getNewestDisplayedDetailsRanking = createSelector(
  getSortedRankings, getMembers, (sortedRankings, members) => {
    if (!sortedRankings || !members) {
      return null;
    }
    return mapDisplayedDetailsRanking(sortedRankings, 0, members);
  },
);

export const getDisplayedChartRankings = createSelector(
  getSortedRankings, getMembers, (sortedRanking, members) => {
    if (!sortedRanking || !members) {
      return null;
    }
    return mapDisplayedChartRankings(sortedRanking, members);
  },
);

export const getSortedDisplayedListRankings = createSelector(
  getSortedRankings, getMembers, (sortedRankings, members) => {
    if (!sortedRankings || !members) {
      return null;
    }
    return sortedRankings.map(sortedRanking => mapDisplayedListRanking(sortedRanking, members));
  },
);

export const getDisplayedDetailsRankingBySeoId = createSelector(
  getSortedRankings, getSortedRankingIndexBySeoId, getMembers, (sortedRankings, sortedRankingIndex, members) => {
    if (!sortedRankings || !members) {
      return null;
    }
    return mapDisplayedDetailsRanking(sortedRankings, sortedRankingIndex, members);
  },
);

export const getDisplayedRecords = createSelector(
  getRecordEntities, getSelectedRecordType, isRecordSortAscOrDesc, getMembers,
  (recordEntities, selectedRecordType, sortAscOrDesc, members) => {
    if (!recordEntities[selectedRecordType] || !members) {
      return null;
    }
    return mapDisplayedRecords(recordEntities[selectedRecordType].records, sortAscOrDesc, members);
  },
);
