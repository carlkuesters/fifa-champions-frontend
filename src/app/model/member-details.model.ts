import {MemberImages} from './member-images.model';

export class MemberDetails {
  id: number;
  name: string;
  description: string;
  images: MemberImages;
  joinDate: number;
  tournaments: number;
  matches: number;
  wins: number;
  draws: number;
  losses: number;
  goalsShot: number;
  goalsReceived: number;
  rankings: any;
  awards: any;
}
