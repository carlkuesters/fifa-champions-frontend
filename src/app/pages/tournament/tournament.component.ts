import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs';

// tslint:disable:max-line-length
import {TournamentDetailStoreFacadeService} from '../../core/services/tournament-detail-store-facade/tournament-detail-store-facade.service';
import {DisplayedTournamentDetails} from '../../model/displayed-tournament-details.model';
import {MemberStoreFacadeService} from '../../core/services/member-store-facade/member-store-facade.service';
// tslint:enable:max-line-length

@Component({
  selector: 'fc-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  displayedTournamentDetails: Observable<DisplayedTournamentDetails>;

  constructor(private activatedRoute: ActivatedRoute,
              private tournamentDetailStoreFacadeService: TournamentDetailStoreFacadeService,
              private memberStoreFacadeService: MemberStoreFacadeService) {
  }

  ngOnInit(): void {
    const seoId = this.activatedRoute.snapshot.paramMap.get('tournamentSeoId');
    this.displayedTournamentDetails = this.tournamentDetailStoreFacadeService.getDisplayedTournamentDetails(seoId);
    this.tournamentDetailStoreFacadeService.loadTournamentDetails(seoId);

    this.memberStoreFacadeService.loadMembers();
  }
}
