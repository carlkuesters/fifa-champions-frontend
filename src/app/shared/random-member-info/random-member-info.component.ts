import {Component, EventEmitter, Input, Output} from '@angular/core';

import {TOURNAMENT_CONSTANTS} from '../../model/tournament.constants';

@Component({
  selector: 'fc-random-member-info',
  templateUrl: './random-member-info.component.html',
  styleUrls: ['./random-member-info.component.scss']
})
export class RandomMemberInfoComponent {

  TOURNAMENT_CONSTANTS = TOURNAMENT_CONSTANTS;

  @Input() memberId: number;
  @Input() memberName: string;
  @Input() memberImage: string;
  @Input() text: string;
  @Input() youtubeVideoId: string;
  @Input() tournamentType: string;
  @Input() tournamentDate: string;
  @Input() locationName: string;
  @Output() displayNewRandomInfo = new EventEmitter<void>();
}
