import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs';

// tslint:disable:max-line-length
import {MemberStoreFacadeService} from '../../core/services/member-store-facade/member-store-facade.service';
import {TournamentDetailStoreFacadeService} from '../../core/services/tournament-detail-store-facade/tournament-detail-store-facade.service';
import {DisplayedTournamentDetails} from '../../model/displayed-tournament-details.model';
import {MatchType} from '../../model/match-type.enum';
import {TournamentMetaType} from '../../model/tournament-meta-type.enum';
// tslint:enable:max-line-length

@Component({
  selector: 'fc-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  MatchType = MatchType;
  TournamentMetaType = TournamentMetaType;

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
