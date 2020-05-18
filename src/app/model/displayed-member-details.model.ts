import {MemberDetailsAward} from './member-details-award.model';
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
  latestRanking: MemberDetailsRanking;
  bestRanking: MemberDetailsRanking;
  awards: MemberDetailsAward[];
}
