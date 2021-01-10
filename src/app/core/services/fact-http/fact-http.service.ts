import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {Fact} from '../../../model/fact.model';

@Injectable()
export class FactHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getRandomFact(): Observable<Fact> {
    return this.httpClient.get<Fact>('/api/fact/index.php');
  }
}
