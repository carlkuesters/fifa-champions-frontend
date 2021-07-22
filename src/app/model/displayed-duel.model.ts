import {DisplayedDuelMatch} from './displayed-duel-match.model';

export class DisplayedDuel {
  memberName1: string;
  memberName2: string;
  matches: number;
  wins1: number;
  draws: number;
  wins2: number;
  goals1: number;
  goals2: number;
  newestMatch: DisplayedDuelMatch;
}
