import {Component, HostListener, Input} from '@angular/core';
import {Router} from '@angular/router';

import {TOURNAMENT_CONSTANTS} from '../../../model/tournament.constants';
import {TournamentOverview} from '../../../model/tournament-overview.model';

@Component({
  selector: 'fc-tournament-entry',
  templateUrl: './tournament-entry.component.html',
  styleUrls: ['./tournament-entry.component.scss']
})
export class TournamentEntryComponent {

  constructor(private router: Router) {
  }

  @Input() tournament: TournamentOverview;

  get title(): string {
    return TOURNAMENT_CONSTANTS[this.tournament.type].title;
  }

  @HostListener('click')
  onClick(): void {
    this.router.navigate(['/tournament/' + this.tournament.id]);
  }
}
