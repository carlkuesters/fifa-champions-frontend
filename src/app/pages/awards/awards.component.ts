import {Component, OnInit} from '@angular/core';

import {BackendInformationService} from '../../core/services/backend-information/backend-information.service';
import {StateService} from '../../core/services/state/state.service';
import {Awards} from '../../model/awards.model';

@Component({
  selector: 'fc-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  years: string[];
  awards: Awards;

  constructor(private state: StateService,
              private backendInformationService: BackendInformationService) {
  }

  ngOnInit(): void {
    this.backendInformationService.getAwards().then(awards => {
      this.years = Object.keys(awards);
      this.awards = awards;
    });
  }
}
