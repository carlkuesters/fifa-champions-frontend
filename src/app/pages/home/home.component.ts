import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {GeneralStoreFacadeService} from '../../core/services/general-store-facade/general-store-facade.service';
import {MemberStoreFacadeService} from '../../core/services/member-store-facade/member-store-facade.service';

@Component({
  selector: 'fc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeMessage: Observable<string>;
  totalGoals: Observable<number>;
  totalMatches: Observable<number>;
  totalTournaments: Observable<number>;
  membersCount: Observable<number>;

  constructor(private generalStoreFacadeService: GeneralStoreFacadeService,
              private memberStoreFacadeService: MemberStoreFacadeService) {
  }

  ngOnInit(): void {
    this.homeMessage = this.generalStoreFacadeService.getHomeMessage();
    this.totalGoals = this.generalStoreFacadeService.getTotalGoals();
    this.totalMatches = this.generalStoreFacadeService.getTotalMatches();
    this.totalTournaments = this.generalStoreFacadeService.getTotalTournaments();
    this.membersCount = this.memberStoreFacadeService.getMembersCount();

    this.generalStoreFacadeService.loadGeneralInformation();
    this.memberStoreFacadeService.loadMembers();
  }
}
