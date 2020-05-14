import {Component, HostListener, Input} from '@angular/core';
import {Router} from '@angular/router';

import {TournamentOverview} from '../../../model/tournament-overview.model';
import {TOURNAMENT_TYPES} from '../../../model/tournament.constants';

@Component({
  selector: 'fc-tournament-entry',
  templateUrl: './tournament-entry.component.html',
  styleUrls: ['./tournament-entry.component.scss']
})
export class TournamentEntryComponent {

  TOURNAMENT_TYPES = TOURNAMENT_TYPES;

  constructor(private router: Router) {
  }

  @Input() tournament: TournamentOverview;

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    this.router.navigate(['/tournament/' + this.tournament.id]);
  }
}
