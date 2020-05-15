import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {MemberStoreFacadeService} from '../../core/services/member-store-facade/member-store-facade.service';
import {DisplayedMember} from '../../model/displayed-member.model';

@Component({
  selector: 'fc-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  displayedMembers: Observable<DisplayedMember[]>;

  constructor(private memberStoreFacadeService: MemberStoreFacadeService) {
  }

  ngOnInit(): void {
    this.displayedMembers = this.memberStoreFacadeService.getDisplayedMembers();

    this.memberStoreFacadeService.loadMembers();
  }
}
