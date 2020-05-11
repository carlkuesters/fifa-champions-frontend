import {Injectable} from '@angular/core';

import {StateModel} from './model/state-model.model';

@Injectable()
export class StateService {
    model = new StateModel();
}
