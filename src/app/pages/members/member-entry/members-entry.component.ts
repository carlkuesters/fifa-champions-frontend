import {Component, Input} from '@angular/core';

import {DisplayedMember} from '../../../model/displayed-member.model';

@Component({
  selector: 'fc-members-entry',
  templateUrl: './members-entry.component.html',
  styleUrls: ['./members-entry.component.scss']
})
export class MembersEntryComponent {
  @Input() member: DisplayedMember;
}
