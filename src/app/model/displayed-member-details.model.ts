import {DisplayedMemberDetailsAward} from './displayed-member-details-award.model';
import {DisplayedTournamentReference} from './displayed-tournament-reference.model';
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
  tournamentResults: DisplayedTournamentReference[];
  highestWin: DisplayedTournamentReference;
  highestLoss: DisplayedTournamentReference;
  routeDuel: string;
}
