import {Component, Input} from '@angular/core';

import {MemberDescription} from '../../model/member-description.model';

@Component({
  selector: 'fc-member-description',
  templateUrl: './member-description.component.html',
  styleUrls: ['./member-description.component.scss']
})
export class MemberDescriptionComponent {
  @Input() description: MemberDescription;
}
