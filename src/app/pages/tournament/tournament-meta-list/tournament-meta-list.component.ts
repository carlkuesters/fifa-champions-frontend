import {Component, Input} from '@angular/core';

import {TournamentMeta} from '../../../model/tournament-meta.model';

@Component({
  selector: 'fc-tournament-meta-list',
  templateUrl: './tournament-meta-list.component.html',
  styleUrls: ['./tournament-meta-list.component.scss']
})
export class TournamentMetaListComponent {
  @Input() title: string;
  @Input() metas: TournamentMeta[];
}
