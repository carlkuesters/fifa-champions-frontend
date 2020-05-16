import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

// tslint:disable:max-line-length
import {TournamentYear} from '../../model/tournament-year.model';
import {TournamentOverviewStoreFacadeService} from '../../core/services/tournament-overview-store-facade/tournament-overview-store-facade.service';
// tslint:enable:max-line-length

@Component({
  selector: 'fc-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  tournamentCount: Observable<number>;
  tournamentYears: Observable<TournamentYear[]>;

  constructor(private tournamentOverviewStoreFacadeService: TournamentOverviewStoreFacadeService) {
  }

  ngOnInit(): void {
    this.tournamentCount = this.tournamentOverviewStoreFacadeService.getTournamentCount();
    this.tournamentYears = this.tournamentOverviewStoreFacadeService.getTournamentYears();

    this.tournamentOverviewStoreFacadeService.loadTournamentOverviews();
  }
}
