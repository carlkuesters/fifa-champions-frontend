import {Injectable} from '@angular/core';

import {BackendInformationService} from '../backend-information/backend-information.service';
import {StateService} from '../state/state.service';

@Injectable()
export class InitService {

  constructor(private backendInformationService: BackendInformationService,
              private state: StateService) {
  }

  initialize(): Promise<void> {
    return this.backendInformationService.getMembers().then(members => {
      this.state.model.members = {};
      members.forEach(member => {
        this.state.model.members[member.id] = member;
      });
    });
  }
}
