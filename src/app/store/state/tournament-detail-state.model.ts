import {EntityState} from '@ngrx/entity';

import {TournamentDetails} from '../../model/tournament-details.model';

export interface TournamentDetailState extends EntityState<TournamentDetails> { }
