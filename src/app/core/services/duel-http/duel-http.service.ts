import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {Duel} from '../../../model/duel.model';

@Injectable()
export class DuelHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getDuel(memberId1: number, memberId2: number): Observable<Duel> {
    return this.httpClient.get<Duel>('/api/duel/index.php?memberId1=' + memberId1 + '&memberId2=' + memberId2);
  }
}
