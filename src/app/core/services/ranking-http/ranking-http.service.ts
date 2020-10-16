import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {Ranking} from '../../../model/ranking.model';

@Injectable()
export class RankingHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getRankings(): Observable<Ranking[]> {
    return this.httpClient.get<Ranking[]>('/api/rankings/index.php');
  }
}
