import {DisplayedIsolatedTournamentMeta} from '../../../model/displayed-isolated-tournament-meta.model';
import {IsolatedTournamentMeta} from '../../../model/isolated-tournament-meta.model';
import {Member} from '../../../model/member.model';
import {TournamentMetaOverview} from '../../../model/tournament-meta-overview.model';
import {formatDate, MONTH_NAMES} from '../date/date.util';
import {getMemberImage} from '../member/member.util';

export function createTournamentMetaOverview(type: string, isolatedTournamentMetas: IsolatedTournamentMeta[]): TournamentMetaOverview {
  const initialTournamentMetaOverview = {
    type,
    allMetas: isolatedTournamentMetas,
    remainingNewMetas: isolatedTournamentMetas,
    displayedMeta: null,
  };
  return {
    ...initialTournamentMetaOverview,
    ...displayNextRandomTournamentMeta(initialTournamentMetaOverview)
  };
}

export function displayNextRandomTournamentMeta(tournamentMetaOverview: TournamentMetaOverview): Partial<TournamentMetaOverview> {
  const remainingNewMetas = (tournamentMetaOverview.remainingNewMetas.length > 0)
    ? [...tournamentMetaOverview.remainingNewMetas]
    : [...tournamentMetaOverview.allMetas];
  const newRandomMetaIndex = Math.floor(Math.random() * remainingNewMetas.length);
  const displayedMeta = remainingNewMetas[newRandomMetaIndex];
  remainingNewMetas.splice(newRandomMetaIndex, 1);
  return {
    remainingNewMetas,
    displayedMeta
  };
}

export function mapDisplayedIsolatedTournamentMeta(
  isolatedTournamentMeta: IsolatedTournamentMeta,
  members: Member[]
): DisplayedIsolatedTournamentMeta {
  const member = members.find(m => m.id === isolatedTournamentMeta.playerId);
  return {
    memberId: (member ? member.id : null),
    memberName: (member ? member.name : null),
    memberImage: (member ? getMemberImage(member.id, 32) : null),
    text: isolatedTournamentMeta.text,
    youtubeVideoId: isolatedTournamentMeta.youtubeVideoId,
    tournamentType: isolatedTournamentMeta.tournamentType,
    tournamentDate: getFormattedDate_TournamentMetaDate(isolatedTournamentMeta.tournamentDate),
    locationName: isolatedTournamentMeta.locationName,
  };
}

function getFormattedDate_TournamentMetaDate(timestamp: number): string {
  return formatDate(timestamp, date => date.getDate() + '. ' + MONTH_NAMES[date.getMonth()] + ' ' + date.getFullYear());
}
