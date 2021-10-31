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
    title: getTournamentTitle(tournamentDetails.type, tournamentDetails.date),
    location: tournamentDetails.location,
    groups: getDisplayedGroups(tournamentDetails, members),
    matches: getDisplayedMatches(tournamentDetails.results.matches, members),
    meta: getDisplayedTournamentMetas(tournamentDetails.meta, members)
  };
}

export function getTournamentTitle(type: string, date: number): string {
  return TOURNAMENT_CONSTANTS[type].title + ' (' + getFormattedDate_Tournament(type, date) + ')';
}

export function getFormattedDate_Tournament(type: string, date: number): string {
  const tournamentType = TOURNAMENT_CONSTANTS[type];
  return formatDate(date, convertedDate => {
    let text = '';
    if (!tournamentType.isYearly) {
      text += MONTH_NAMES[convertedDate.getMonth()] + ' ';
    }
    text += convertedDate.getFullYear();
    return text;
  });
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
    typeMatches.push(tournamentMatch.players.map(p => getDisplayedMatchPlayer(p, members)));
  });
  return displayedTournamentMatches;
}

function getDisplayedMatchPlayer(tournamentMatchPlayer: TournamentMatchPlayer, members: Member[]): DisplayedTournamentMatchPlayer {
  const member = members.find(m => m.id === tournamentMatchPlayer.id);
  return {
    image: getMemberImage(tournamentMatchPlayer.id, 32),
    name: (member ? member.name : '?'),
    goals: ((tournamentMatchPlayer.goals !== null) ? tournamentMatchPlayer.goals.toString() : '?'),
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
