import {EntityState} from '@ngrx/entity';

import {Records} from '../../model/records.model';

export interface RecordState extends EntityState<Records> { }
