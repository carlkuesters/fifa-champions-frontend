import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {DisplayedMember} from '../../../model/displayed-member.model';

@Component({
  selector: 'fc-members-entry',
  templateUrl: './members-entry.component.html',
  styleUrls: ['./members-entry.component.scss']
})
export class MembersEntryComponent {

  @Input() member: DisplayedMember;

  constructor(private router: Router) {
  }

  goToMemberDetailPage(): void {
    this.router.navigate(['/member/' + this.member.id]);
  }
}
