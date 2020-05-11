import {Component, Input} from '@angular/core';

import {StateService} from '../../../core/services/state/state.service';
import {Award} from '../../../model/award.model';
import {Member} from '../../../model/member.model';

@Component({
  selector: 'fc-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.scss']
})
export class AwardComponent {

  @Input() award: Award;

  constructor(private state: StateService) {
  }

  get member(): Member {
    return this.state.model.members[this.award.memberId];
  }
}
