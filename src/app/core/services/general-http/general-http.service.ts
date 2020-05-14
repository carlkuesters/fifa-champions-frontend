import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {GeneralInformation} from '../../../model/general-information.model';

@Injectable()
export class GeneralHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getGeneralInformation(): Observable<GeneralInformation> {
    return this.httpClient.get<GeneralInformation>('/api/generalInfo/index.php');
  }
}
