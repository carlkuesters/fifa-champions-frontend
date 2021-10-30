import {MemberDescription} from './member-description.model';
import {MemberDetailsAward} from './member-details-award.model';
import {MemberDetailsHighestMatch} from './member-details-highest-match.model';
import {MemberDetailsRanking} from './member-details-ranking.model';
import {MemberDetailsTournamentResult} from './member-details-tournament-result.model';

export class MemberDetails {
  id: number;
  name: string;
  description: MemberDescription;
  image: string;
  joinDate: number;
  tournaments: number;
  matches: number;
  wins: number;
  draws: number;
  losses: number;
  goalsShot: number;
  goalsReceived: number;
  rankings: MemberDetailsRanking[];
  awards: MemberDetailsAward[];
  tournamentResults: MemberDetailsTournamentResult[];
  highestWin: MemberDetailsHighestMatch;
  highestLoss: MemberDetailsHighestMatch;
}
