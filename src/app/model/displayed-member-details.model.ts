import {DisplayedMemberDetailsAward} from './displayed-member-details-award.model';
import {DisplayedMemberDetailsHighestMatch} from './displayed-member-details-highest-match.model';
import {DisplayedMemberDetailsTournamentResult} from './displayed-member-details-tournament-result.model';
import {MemberDetailsRanking} from './member-details-ranking.model';

export class DisplayedMemberDetails {
  name: string;
  joinDate: number;
  image: string;
  tournaments: number;
  matches: number;
  wins: number;
  draws: number;
  losses: number;
  goalsShot: number;
  goalsReceived: number;
  description: string;
  allRankings: MemberDetailsRanking[];
  latestRanking: MemberDetailsRanking;
  bestRanking: MemberDetailsRanking;
  awards: DisplayedMemberDetailsAward[];
  tournamentResults: DisplayedMemberDetailsTournamentResult[];
  highestWin: DisplayedMemberDetailsHighestMatch;
  highestLoss: DisplayedMemberDetailsHighestMatch;
  routeDuel: string;
}
