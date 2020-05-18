import {MemberDetailsAward} from './member-details-award.model';
import {MemberDetailsRanking} from './member-details-ranking.model';

export class MemberDetails {
  id: number;
  name: string;
  description: string;
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
}
