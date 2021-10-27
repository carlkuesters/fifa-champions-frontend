import {DuelMatch} from './duel-match.model';

export class Duel {
  memberId1: number;
  memberId2: number;
  wins1: number;
  draws: number;
  wins2: number;
  goals1: number;
  goals2: number;
  highestWin1: DuelMatch;
  highestWin2: DuelMatch;
  matches: DuelMatch[];
}
