import {createAction, props} from '@ngrx/store';

import {Fact} from '../../model/fact.model';

export const loadRandomFact = createAction('[Fact] Load random fact');
export const randomFactLoaded = createAction('[Fact] Random fact loaded', props<{ fact: Fact }>());
