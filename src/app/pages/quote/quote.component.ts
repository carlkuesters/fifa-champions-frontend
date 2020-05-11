import {Component, OnInit} from '@angular/core';

import {BackendInformationService} from '../../core/services/backend-information/backend-information.service';
import {StateService} from '../../core/services/state/state.service';
import {Member} from '../../model/member.model';
import {TournamentMeta} from '../../model/tournamentMeta.model';

@Component({
  selector: 'fc-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  allQuotes: TournamentMeta[];
  remainingNewQuotes: TournamentMeta[];
  displayedQuote: TournamentMeta;

  constructor(private state: StateService,
              private backendInformationService: BackendInformationService) {
  }

  ngOnInit(): void {
    this.backendInformationService.getTournamentMeta('quote').then(quotes => {
      this.allQuotes = quotes;
      this.remainingNewQuotes = [];
      this.displayNewRandomQuote();
    });
  }

  displayNewRandomQuote(): void {
    if (this.remainingNewQuotes.length === 0) {
      this.remainingNewQuotes = [...this.allQuotes];
    }
    const newRandomQuoteIndex = Math.floor(Math.random() * this.remainingNewQuotes.length);
    this.displayedQuote = this.remainingNewQuotes[newRandomQuoteIndex];
    this.remainingNewQuotes.splice(newRandomQuoteIndex, 1);
  }

  get member(): Member | null {
    const memberId = this.displayedQuote.playerId;
    return (memberId ? this.state.model.members[memberId] : null);
  }
}
