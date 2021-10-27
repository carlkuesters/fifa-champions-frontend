import {DisplayedDuelMatch} from './displayed-duel-match.model';

export class DisplayedDuel {
  memberId1: number;
  memberName1: string;
  memberId2: number;
  memberName2: string;
  wins1: number;
  draws: number;
  wins2: number;
  totalGoals: number;
  totalGoals1: number;
  totalGoals2: number;
  averageGoals1: number | null;
  averageGoals2: number | null;
  highestWin1: DisplayedDuelMatch | null;
  highestWin2: DisplayedDuelMatch | null;
  favourite: string;
  favouritePercentageWin: number;
  favouritePercentageDraw: number;
  favouritePercentageLoss: number;
  matches: DisplayedDuelMatch[];
}
