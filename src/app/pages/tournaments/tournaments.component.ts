import {Component, OnInit} from '@angular/core';

import {BackendInformationService} from '../../core/services/backend-information/backend-information.service';
import {Tournament} from '../../model/tournament.model';

@Component({
  selector: 'fc-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  tournaments: Tournament[];

  constructor(private backendInformationService: BackendInformationService) {
  }

  ngOnInit(): void {
    this.backendInformationService.getTournaments().then(tournaments => {
      this.tournaments = tournaments;
    });
  }
}
