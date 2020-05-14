import {createAction, props} from '@ngrx/store';

import {GeneralInformation} from '../../model/general-information.model';

// tslint:disable:max-line-length
export const loadGeneralInformation = createAction('[General] Load general information');
export const generalInformationLoaded = createAction('[Members] General information loaded', props<{ generalInformation: GeneralInformation }>());
// tslint:enable:max-line-length
