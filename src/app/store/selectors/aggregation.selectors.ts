import {createSelector} from '@ngrx/store';

import {mapAwardYears} from '../../core/util/award/award.util';
import {mapDisplayedDuel} from '../../core/util/duel/duel.util';
import {mapDisplayedFact} from '../../core/util/fact/fact.util';
import {mapDisplayedMemberDetails} from '../../core/util/member-details/member-details.util';
import {
  mapDisplayedListRanking,
  mapDisplayedChartRankings,
  mapDisplayedDetailsRanking
} from '../../core/util/ranking/ranking.util';
import {mapDisplayedRecords} from '../../core/util/record/record.util';
import {mapDisplayedTournamentDetails} from '../../core/util/tournament-details/tournament-details.util';
import {mapDisplayedIsolatedTournamentMeta} from '../../core/util/tournament-meta-overview/tournament-meta-overview.util';
import {getDuelId} from '../reducers/duel.reducers';
import {getAwards} from './award.selectors';
import {getDuelEntities} from './duel.selectors';
import {getDuelMemberId1, getDuelMemberId2} from './duel-setting.selectors';
import {getFact} from './fact.selectors';
import {getMembers} from './member.selectors';
import {getMemberDetails} from './member-detail.selectors';
import {isSortTournamentResultsDateOrPlace} from './member-detail-setting.selectors';
import {getSortedRankingIndexBySeoId, getSortedRankings} from './ranking.selectors';
import {getRecordEntities} from './record.selectors';
import {getSelectedRecordType, isRecordSortAscOrDesc} from './record-setting.selectors';
import {getTournamentDetails} from './tournament-detail.selectors';
import {getDisplayedTournamentMetaOverviewMeta} from './tournament-meta-overview.selectors';
import {getTournamentOverviews} from './tournament-overview.selectors';

export const getDisplayedMemberDetails = createSelector(
  getMemberDetails, getTournamentOverviews, isSortTournamentResultsDateOrPlace,
  (memberDetails, tournamentOverviews, sortTournamentResultsDateOrPlace) => {
    if ((!memberDetails) || (!tournamentOverviews)) {
      return null;
    }
    return mapDisplayedMemberDetails(memberDetails, tournamentOverviews, sortTournamentResultsDateOrPlace);
  },
);

export const getSelectedDuel = createSelector(
  getDuelEntities, getDuelMemberId1, getDuelMemberId2, (duelEntities, memberId1, memberId2) => {
    if (!duelEntities || !memberId1 || !memberId2) {
      return null;
    }
    return duelEntities[getDuelId(memberId1, memberId2)];
  },
);

export const getDisplayedDuel = createSelector(
  getSelectedDuel, getMembers, (duel, members) => {
    if (!duel || !members) {
      return null;
    }
    return mapDisplayedDuel(duel, members);
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
    return mapDisplayedRecords(recordEntities[selectedRecordType].records, selectedRecordType, sortAscOrDesc, members);
  },
);

export const getDisplayedFact = createSelector(
  getFact, getMembers,
  (fact, members) => {
    if (!fact || !members) {
      return null;
    }
    return mapDisplayedFact(fact, members);
  },
);
