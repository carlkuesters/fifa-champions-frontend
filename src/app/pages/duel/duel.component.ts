import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs';

import {DuelSettingStoreFacadeService} from '../../core/services/duel-setting-store-facade/duel-store-facade.service';
import {DuelStoreFacadeService} from '../../core/services/duel-store-facade/duel-store-facade.service';
import {MemberStoreFacadeService} from '../../core/services/member-store-facade/member-store-facade.service';
import {DisplayedDuel} from '../../model/displayed-duel.model';
import {DropdownOption} from '../../model/dropdown-option.model';

@Component({
  selector: 'fc-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.scss']
})
export class DuelComponent implements OnInit {

  displayedDuel: Observable<DisplayedDuel>;
  memberDropdownOptions: Observable<DropdownOption[]>;

  constructor(private activatedRoute: ActivatedRoute,
              private duelSettingStoreFacadeService: DuelSettingStoreFacadeService,
              private duelStoreFacadeService: DuelStoreFacadeService,
              private memberStoreFacadeService: MemberStoreFacadeService) {
  }

  ngOnInit(): void {
    this.displayedDuel = this.duelStoreFacadeService.getDisplayedDuel();
    this.memberDropdownOptions = this.memberStoreFacadeService.getMembersDropdownOptions();

    this.memberStoreFacadeService.loadMembers();

    this.activatedRoute.params.subscribe(params => this.duelSettingStoreFacadeService.selectMembersBySeoId(params.duelSeoId));
  }

  selectMember1(memberId: number): void {
    this.duelSettingStoreFacadeService.selectMember1(memberId);
  }

  selectMember2(memberId: number): void {
    this.duelSettingStoreFacadeService.selectMember2(memberId);
  }
}
