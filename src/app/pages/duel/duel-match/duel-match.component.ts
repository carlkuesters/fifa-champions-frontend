import { Component, Input } from '@angular/core';

import { DisplayedDuelMatch } from '../../../model/displayed-duel-match.model';

@Component({
  selector: 'fc-duel-match',
  templateUrl: './duel-match.component.html',
  styleUrls: ['./duel-match.component.scss']
})
export class DuelMatchComponent {
  @Input() match: DisplayedDuelMatch;
}
