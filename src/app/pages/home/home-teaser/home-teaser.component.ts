import {Component, Input} from '@angular/core';

@Component({
  selector: 'fc-home-teaser',
  templateUrl: './home-teaser.component.html',
  styleUrls: ['./home-teaser.component.scss']
})
export class HomeTeaserComponent {

  @Input() iconName: string;
  @Input() teaserTitle: string;
  @Input() description: string;

  get iconUrl(): string {
    return 'assets/images/homeTeasers/' + this.iconName + '.png';
  }
}
