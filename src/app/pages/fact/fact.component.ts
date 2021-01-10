import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {FactStoreFacadeService} from '../../core/services/fact-store-facade/fact-store-facade.service';
import {MemberStoreFacadeService} from '../../core/services/member-store-facade/member-store-facade.service';
import {DisplayedFact} from '../../model/displayed-member-info.model';

@Component({
  selector: 'fc-fact',
  templateUrl: './fact.component.html'
})
export class FactComponent implements OnInit {

  displayedFact: Observable<DisplayedFact>;

  constructor(private factStoreFacadeService: FactStoreFacadeService,
              private memberStoreFacadeService: MemberStoreFacadeService) {
  }

  ngOnInit(): void {
    this.displayedFact = this.factStoreFacadeService.getDisplayedFact();

    this.loadRandomFact();
    this.memberStoreFacadeService.loadMembers();
  }

  loadRandomFact(): void {
    this.factStoreFacadeService.loadRandomFact();
  }
}
