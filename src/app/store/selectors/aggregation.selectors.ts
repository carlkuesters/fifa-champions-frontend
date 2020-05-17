import {createSelector} from '@ngrx/store';

import {mapAwardYears} from '../../core/util/award/award.util';
import {mapDisplayedMemberDetails} from '../../core/util/member-details/member-details.util';
import {mapDisplayedTournamentDetails} from '../../core/util/tournament-details/tournament-details.util';
import {mapDisplayedIsolatedTournamentMeta} from '../../core/util/tournament-meta-overview/tournament-meta-overview.util';
import {getAwards} from './award.selectors';
import {getMembers} from './member.selectors';
import {getMemberDetails} from './member-detail.selectors';
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
