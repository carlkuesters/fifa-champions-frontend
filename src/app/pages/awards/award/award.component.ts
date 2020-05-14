import {Component, Input} from '@angular/core';

import {DisplayedAward} from '../../../model/displayed-award.model';

@Component({
  selector: 'fc-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.scss']
})
export class AwardComponent {

  @Input() award: DisplayedAward;

}
