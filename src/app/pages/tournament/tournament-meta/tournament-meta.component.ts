import {Component, Input} from '@angular/core';

import {TournamentMeta} from '../../../model/tournament-meta.model';

@Component({
  selector: 'fc-tournament-meta',
  templateUrl: './tournament-meta.component.html',
  styleUrls: ['./tournament-meta.component.scss']
})
export class TournamentMetaComponent {
  @Input() meta: TournamentMeta;
}
