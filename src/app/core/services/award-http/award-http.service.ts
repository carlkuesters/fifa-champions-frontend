import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {Award} from '../../../model/award.model';

@Injectable()
export class AwardHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getAwards(): Observable<Award[]> {
    return this.httpClient.get<Award[]>('/api/awards/index.php');
  }
}
