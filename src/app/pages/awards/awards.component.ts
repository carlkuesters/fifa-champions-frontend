import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {AwardStoreFacadeService} from '../../core/services/award-store-facade/award-store-facade.service';
import {MemberStoreFacadeService} from '../../core/services/member-store-facade/member-store-facade.service';
import {AwardYear} from '../../model/awards-year.model';

@Component({
  selector: 'fc-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  years: string[];
  awardYears: Observable<AwardYear[]>;

  constructor(private awardStoreFacadeService: AwardStoreFacadeService,
              private memberStoreFacadeService: MemberStoreFacadeService) {
  }

  ngOnInit(): void {
    this.awardYears = this.awardStoreFacadeService.getAwardYears();

    this.awardStoreFacadeService.loadAwards();
    this.memberStoreFacadeService.loadMembers();
  }
}
