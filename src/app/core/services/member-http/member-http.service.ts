import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {Member} from '../../../model/member.model';
import {MemberDetails} from '../../../model/member-details.model';

@Injectable()
export class MemberHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getMembers(): Observable<Member[]> {
    return this.httpClient.get<Member[]>('/api/members/index.php');
  }

  getMemberDetails(id: number): Observable<MemberDetails> {
    return this.httpClient.get<MemberDetails>('/api/member/index.php?id=' + id);
  }
}
