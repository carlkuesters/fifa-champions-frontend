import {Component, OnInit} from '@angular/core';

import {BackendInformationService} from '../../core/services/backend-information/backend-information.service';
import {StateService} from '../../core/services/state/state.service';
import {GeneralInformation} from '../../model/general-information.model';

@Component({
  selector: 'fc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private generalInformation: GeneralInformation;

  constructor(private state: StateService,
              private backendInformationService: BackendInformationService) {
  }

  ngOnInit(): void {
    this.backendInformationService.getGeneralInformation().then(generalInformation => {
      this.generalInformation = generalInformation;
    });
  }

  get membersCount(): number {
    return Object.keys(this.state.model.members).length;
  }
}
