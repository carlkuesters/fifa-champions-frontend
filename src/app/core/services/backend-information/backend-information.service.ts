import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Awards} from '../../../model/awards.model';
import {GeneralInformation} from '../../../model/general-information.model';
import {Member} from '../../../model/member.model';
import {MemberDetails} from '../../../model/member-details.model';
import {Tournament} from '../../../model/tournament.model';
import {TournamentEntry} from '../../../model/tournament-entry.model';
import {TournamentMeta} from '../../../model/tournamentMeta.model';

@Injectable()
export class BackendInformationService {

  private restEndpointBase = 'http://fifa-champions.de/api/';
  private cachedResults_Get: {[key: string]: Promise<any>} = {};

  constructor(private httpClient: HttpClient) { }

  getGeneralInformation(): Promise<GeneralInformation> {
    return this.getCached<GeneralInformation>('generalInfo/index.php');
  }

  getMembers(): Promise<Member[]> {
    return this.getCached<Member[]>('members/index.php');
  }

  getMemberDetails(id: number): Promise<MemberDetails> {
    return this.getCached<MemberDetails>('member/index.php?id=' + id);
  }

  getTournaments(): Promise<TournamentEntry[]> {
    return this.getCached<TournamentEntry[]>('tournaments/index.php');
  }

  getTournament(id: number): Promise<Tournament> {
    return this.getCached<Tournament>('tournament/index.php?id=' + id);
  }

  getAwards(): Promise<Awards> {
    return this.getCached<Awards>('awards/index.php');
  }

  getTournamentMeta(type: string): Promise<TournamentMeta[]> {
    return this.getCached<TournamentMeta[]>('tournamentMeta/index.php?type=' + encodeURIComponent(type));
  }

  private getCached<T>(endpointPath: string): Promise<T> {
    const url = this.restEndpointBase + endpointPath;
    const cachedResponse = this.cachedResults_Get[url];
    if (cachedResponse) {
      return cachedResponse;
    }
    return this.httpClient.get<T>(url).toPromise().then(body => {
      this.cachedResults_Get[url] = Promise.resolve(body);
      return body;
    });
  }
}
