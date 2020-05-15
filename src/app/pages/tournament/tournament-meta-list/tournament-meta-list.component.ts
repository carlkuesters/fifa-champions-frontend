import {Component, Input} from '@angular/core';

import {DisplayedTournamentMeta} from '../../../model/displayed-tournament-meta.model';
import {TournamentMetaType} from '../../../model/tournament-meta-type.enum';
import {TOURNAMENT_META_CONSTANTS} from '../../../model/tournament-meta.constants';

@Component({
  selector: 'fc-tournament-meta-list',
  templateUrl: './tournament-meta-list.component.html',
  styleUrls: ['./tournament-meta-list.component.scss']
})
export class TournamentMetaListComponent {

  @Input() type: TournamentMetaType;
  @Input() metas: DisplayedTournamentMeta[];

  get title(): string | null {
    if (this.type === TournamentMetaType.NEWS) {
      return null;
    }
    const tournamentMetaTypeConstants = TOURNAMENT_META_CONSTANTS[this.type];
    return ((this.metas.length > 1) ? tournamentMetaTypeConstants.titlePlural : tournamentMetaTypeConstants.titleSingular) + ' des Abends';
  }
}
