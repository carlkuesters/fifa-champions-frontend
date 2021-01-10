import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'fc-random-member-info',
  templateUrl: './random-member-info.component.html',
  styleUrls: ['./random-member-info.component.scss']
})
export class RandomMemberInfoComponent {
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
