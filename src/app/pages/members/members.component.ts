import {Component} from '@angular/core';

import {StateService} from '../../core/services/state/state.service';
import {Member} from '../../model/member.model';

@Component({
  selector: 'fc-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {

  constructor(private state: StateService) {
  }

  get members(): Member[] {
    return Object.keys(this.state.model.members)
      .map(memberId => this.state.model.members[memberId]);
  }
}
