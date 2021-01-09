import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {Record} from '../../../model/record.model';

@Injectable()
export class RecordHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getRecords(type: string): Observable<Record[]> {
    return this.httpClient.get<Record[]>('/api/records/index.php?type=' + encodeURIComponent(type));
  }
}
