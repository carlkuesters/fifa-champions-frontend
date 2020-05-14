import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {IsolatedTournamentMeta} from '../../../model/isolated-tournament-meta.model';
import {TournamentDetails} from '../../../model/tournament-details.model';
import {TournamentOverview} from '../../../model/tournament-overview.model';

@Injectable()
export class TournamentHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getTournamentOverviews(): Observable<TournamentOverview[]> {
    return this.httpClient.get<TournamentOverview[]>('api/tournaments/index.php');
  }

  getTournamentDetails(id: number): Observable<TournamentDetails> {
    return this.httpClient.get<TournamentDetails>('api/tournament/index.php?id=' + id);
  }

  getIsolatedTournamentMetas(metaType: string): Observable<IsolatedTournamentMeta[]> {
    return this.httpClient.get<IsolatedTournamentMeta[]>('api/tournamentMeta/index.php?type=' + encodeURIComponent(metaType));
  }
}
