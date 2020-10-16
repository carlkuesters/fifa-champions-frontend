import {DisplayedTournamentDetails} from '../../../model/displayed-tournament-details.model';
import {DisplayedTournamentGroup} from '../../../model/displayed-tournament-group.model';
import {DisplayedTournamentGroupPlayer} from '../../../model/displayed-tournament-group-player.model';
import {DisplayedTournamentMatches} from '../../../model/displayed-tournament-matches.model';
import {DisplayedTournamentMatchPlayer} from '../../../model/displayed-tournament-match-player.model';
import {DisplayedTournamentMeta} from '../../../model/displayed-tournament-meta.model';
import {TournamentDetails} from '../../../model/tournament-details.model';
import {TournamentMatch} from '../../../model/tournament-match.model';
import {TournamentMatchPlayer} from '../../../model/tournament-match-player.model';
import {Member} from '../../../model/member.model';
import {TOURNAMENT_CONSTANTS} from '../../../model/tournament.constants';
import {TournamentGroupPlayer} from '../../../model/tournament-group-player.model';
import {TournamentMeta} from '../../../model/tournament-meta.model';
import {TournamentPlayer} from '../../../model/tournament-player.model';
import {formatDate, MONTH_NAMES} from '../date/date.util';
import {getMemberImage} from '../member/member.util';

const GROUP_NAMES = ['A', 'B', 'C', 'D'];

export function mapDisplayedTournamentDetails(tournamentDetails: TournamentDetails, members: Member[]): DisplayedTournamentDetails {
  return {
    title: getTitle(tournamentDetails),
    location: tournamentDetails.location,
    groups: getDisplayedGroups(tournamentDetails, members),
    matches: getDisplayedMatches(tournamentDetails.results.matches, members),
    meta: getDisplayedTournamentMetas(tournamentDetails.meta, members)
  };
}

function getTitle(tournamentDetails: TournamentDetails): string {
  const tournamentType = TOURNAMENT_CONSTANTS[tournamentDetails.type];
  const formattedDate = formatDate(tournamentDetails.date, date => {
    let text = '';
    if (!tournamentType.isYearly) {
      text += MONTH_NAMES[date.getMonth()] + ' ';
    }
    text += date.getFullYear();
    return text;
  });
  return tournamentType.title + ' (' + formattedDate + ')';
}

function getDisplayedGroups(tournamentDetails: TournamentDetails, members: Member[]): DisplayedTournamentGroup[] {
  return tournamentDetails.results.groups.map((groupPlayers, index) => {
    return {
      name: getGroupName(tournamentDetails, index),
      players: groupPlayers.map((groupPlayer, groupPlayerIndex) => {
        const tournamentPlayer = tournamentDetails.players.find(tp => tp.playerId === groupPlayer.playerId);
        const member = members.find(m => m.id === groupPlayer.playerId);
        return getDisplayedGroupPlayer(groupPlayerIndex, groupPlayer, tournamentPlayer, member);
      })
    };
  });
}

function getDisplayedGroupPlayer(
  groupPlayerIndex: number,
  groupPlayer: TournamentGroupPlayer,
  tournamentPlayer: TournamentPlayer,
  member: Member
): DisplayedTournamentGroupPlayer {
  return {
    place: (groupPlayerIndex + 1),
    teamId: tournamentPlayer.team.id,
    teamName: tournamentPlayer.team.name,
    playerName: member.name,
    playerImage: getMemberImage(member.id, 32),
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

function getDisplayedMatches(tournamentMatches: TournamentMatch[], members: Member[]): DisplayedTournamentMatches {
  const displayedTournamentMatches: DisplayedTournamentMatches = {};
  tournamentMatches.forEach(tournamentMatch => {
    let typeMatches = displayedTournamentMatches[tournamentMatch.type];
    if (!typeMatches) {
      typeMatches = [];
      displayedTournamentMatches[tournamentMatch.type] = typeMatches;
    }
    typeMatches.push(tournamentMatch.players.map(tmp => getDisplayedMatchPlayer(tmp, members)));
  });
  return displayedTournamentMatches;
}

function getDisplayedMatchPlayer(tournamentMatchPlayer: TournamentMatchPlayer, members: Member[]): DisplayedTournamentMatchPlayer {
  const member = members.find(m => m.id === tournamentMatchPlayer.id);
  return {
    id: member.id,
    name: member.name,
    image: getMemberImage(member.id, 32),
    goals: tournamentMatchPlayer.goals
  };
}

function getDisplayedTournamentMetas(
  tournamentMetas: {[type: string]: TournamentMeta[]},
  members: Member[]): {[type: string]: DisplayedTournamentMeta[]
}  {
  const displayedTournamentMetas = {};
  Object.keys(tournamentMetas).forEach(metaType => {
    displayedTournamentMetas[metaType] = tournamentMetas[metaType].map(
      tournamentMeta => getDisplayedTournamentMeta(tournamentMeta, members)
    );
  });
  return displayedTournamentMetas;
}


function getDisplayedTournamentMeta(tournamentMeta: TournamentMeta, members: Member[]): DisplayedTournamentMeta {
  const member = members.find(m => m.id === tournamentMeta.playerId);
  return {
    memberId: (member ? member.id : null),
    memberName: (member ? member.name : null),
    memberImage: (member ? getMemberImage(member.id, 32) : null),
    text: tournamentMeta.text,
    youtubeVideoId: tournamentMeta.youtubeVideoId
  };
}
