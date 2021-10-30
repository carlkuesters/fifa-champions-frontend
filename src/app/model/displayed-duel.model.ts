import {DisplayedTournamentReference} from './displayed-tournament-reference.model';

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
  highestWin1: DisplayedTournamentReference | null;
  highestWin2: DisplayedTournamentReference | null;
  favourite: string;
  favouritePercentageWin: number;
  favouritePercentageDraw: number;
  favouritePercentageLoss: number;
  matches: DisplayedTournamentReference[];
}
