import {Component, Input} from '@angular/core';

import {DisplayedTournamentReference} from '../../model/displayed-tournament-reference.model';

@Component({
  selector: 'fc-tournament-references',
  templateUrl: './tournament-references.component.html',
  styleUrls: ['./tournament-references.component.scss']
})
export class TournamentReferencesComponent {
  @Input() tournamentReferences: DisplayedTournamentReference[];
}
