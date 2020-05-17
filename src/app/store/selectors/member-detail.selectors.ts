import {createFeatureSelector, createSelector} from '@ngrx/store';

import {parseSeoId} from '../../core/util/seo/seo.util';
import {memberDetailsAdapter} from '../reducers/member-detail.reducers';
import {MemberDetailState} from '../state/member-detail-state.model';

const getMemberDetailState = createFeatureSelector<MemberDetailState>('memberDetail');

const entitySelectors = memberDetailsAdapter.getSelectors();

const getEntities = createSelector(
  getMemberDetailState,
  entitySelectors.selectEntities
);

export const getMemberDetails = createSelector(
  getEntities, (entities, props) => entities[parseSeoId(props.seoId)],
);
