import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs';

import {MemberDetailStoreFacadeService} from '../../core/services/member-detail-store-facade/member-detail-store-facade.service';
import {MemberDetailSettingStoreFacadeService} from '../../core/services/member-detail-setting-store-facade/member-detail-setting-store-facade.service';
import {MemberStoreFacadeService} from '../../core/services/member-store-facade/member-store-facade.service';
import {TournamentOverviewStoreFacadeService} from '../../core/services/tournament-overview-store-facade/tournament-overview-store-facade.service';
import {DisplayedMemberDetails} from '../../model/displayed-member-details.model';

@Component({
  selector: 'fc-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  displayedMemberDetails: Observable<DisplayedMemberDetails>;

  constructor(private activatedRoute: ActivatedRoute,
              private memberDetailStoreFacadeService: MemberDetailStoreFacadeService,
              private tournamentOverviewStoreFacadeService: TournamentOverviewStoreFacadeService,
              private memberStoreFacadeService: MemberStoreFacadeService,
              private memberDetailSettingStoreFacadeService: MemberDetailSettingStoreFacadeService) {
  }

  ngOnInit(): void {
    const seoId = this.activatedRoute.snapshot.paramMap.get('memberSeoId');
    this.displayedMemberDetails = this.memberDetailStoreFacadeService.getDisplayedMemberDetails(seoId);
    this.memberDetailStoreFacadeService.loadMemberDetails(seoId);
    this.tournamentOverviewStoreFacadeService.loadTournamentOverviews();
    this.memberStoreFacadeService.loadMembers();
  }

  sortTournamentResults(sortTournamentResultsDateOrPlace: boolean): void {
    this.memberDetailSettingStoreFacadeService.sortTournamentResults(sortTournamentResultsDateOrPlace);
  }
}
