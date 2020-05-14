import {DisplayedIsolatedTournamentMeta} from '../../../model/displayed-isolated-tournament-meta.model';
import {IsolatedTournamentMeta} from '../../../model/isolated-tournament-meta.model';
import {Member} from '../../../model/member.model';
import {TournamentMetaOverview} from '../../../model/tournament-meta-overview.model';

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
    memberImage: (member ? member.images.small : null),
    text: isolatedTournamentMeta.text,
    tournamentType: isolatedTournamentMeta.tournamentType,
    tournamentDate: isolatedTournamentMeta.tournamentDate,
    locationName: isolatedTournamentMeta.locationName,
  };
}
