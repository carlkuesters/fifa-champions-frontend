import {TournamentDetails} from '../../../model/tournament-details.model';
import {DisplayedTournamentDetails} from '../../../model/displayed-tournament-details.model';
import {DisplayedTournamentGroupPlayer} from '../../../model/displayed-tournament-group-player.model';
import {DisplayedTournamentGroup} from '../../../model/displayed-tournament-group.model';
import {Member} from '../../../model/member.model';
import {TOURNAMENT_TYPES} from '../../../model/tournament.constants';
import {TournamentGroupPlayer} from '../../../model/tournament-group-player.model';

const GROUP_NAMES = ['A', 'B', 'C', 'D'];

export function mapDisplayedTournamentDetails(tournamentDetails: TournamentDetails, members: Member[]): DisplayedTournamentDetails {
  return {
    title: getTitle(tournamentDetails),
    location: tournamentDetails.location,
    groups: getDisplayedGroups(tournamentDetails, members),
    meta: tournamentDetails.meta,
    results: tournamentDetails.results
  };
}

function getTitle(tournamentDetails: TournamentDetails): string {
  const tournamentType = TOURNAMENT_TYPES[tournamentDetails.type];
  let title = tournamentType.title + ' (';
  const date = new Date(tournamentDetails.date * 1000);
  if (!tournamentType.isYearly) {
    title += date.getMonth() + ' ';
  }
  title += date.getFullYear() + ')';
  return title;
}

function getDisplayedGroups(tournamentDetails: TournamentDetails, members: Member[]): DisplayedTournamentGroup[] {
  return tournamentDetails.results.groups.map((groupPlayers, index) => {
    return {
      name: getGroupName(tournamentDetails, index),
      players: groupPlayers.map((groupPlayer, groupPlayerIndex) => getDisplayedGroupPlayer(groupPlayerIndex, groupPlayer, members))
    };
  });
}

function getDisplayedGroupPlayer(place: number, groupPlayer: TournamentGroupPlayer, members): DisplayedTournamentGroupPlayer {
  const member = members.find(m => m.id === groupPlayer.playerId);
  return {
    place,
    playerName: member.name,
    playerImage: member.images.small,
    games: groupPlayer.games,
    wins: groupPlayer.wins,
    draws: groupPlayer.draws,
    losses: groupPlayer.losses,
    goals_scored: groupPlayer.goals_scored,
    goals_obtained: groupPlayer.goals_obtained,
    points: groupPlayer.points,
    goals_difference: groupPlayer.goals_difference
  };
}

function getGroupName(tournamentDetails: TournamentDetails, groupIndex: number): string {
  return ((tournamentDetails.results.groups.length > 1) ? GROUP_NAMES[groupIndex] : null);
}
