import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {MemberStoreFacadeService} from '../../core/services/member-store-facade/member-store-facade.service';
import {Member} from '../../model/member.model';

@Component({
  selector: 'fc-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members: Observable<Member[]>;

  constructor(private memberStoreFacadeService: MemberStoreFacadeService) {
  }

  ngOnInit(): void {
    this.members = this.memberStoreFacadeService.getMembers();

    this.memberStoreFacadeService.loadMembers();
  }
}
