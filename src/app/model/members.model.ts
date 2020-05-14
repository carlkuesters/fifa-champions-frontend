import {Member} from './member.model';

export interface Members {
  [memberId: number]: Member;
}
