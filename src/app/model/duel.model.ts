import {DuelMatch} from './duel-match.model';

export class Duel {
  memberId1: number;
  memberId2: number;
  matches: number;
  wins1: number;
  draws: number;
  wins2: number;
  goals1: number;
  goals2: number;
  newestMatch: DuelMatch;
}
