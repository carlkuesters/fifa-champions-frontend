import {Component, Input} from '@angular/core';

import {DisplayedTournamentMeta} from '../../../model/displayed-tournament-meta.model';

@Component({
  selector: 'fc-tournament-meta',
  templateUrl: './tournament-meta.component.html',
  styleUrls: ['./tournament-meta.component.scss']
})
export class TournamentMetaComponent {
  @Input() meta: DisplayedTournamentMeta;
}
