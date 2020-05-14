import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {Member} from '../../../model/member.model';

@Injectable()
export class MemberHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getMembers(): Observable<Member[]> {
    return this.httpClient.get<Member[]>('/api/members/index.php');
  }
}
