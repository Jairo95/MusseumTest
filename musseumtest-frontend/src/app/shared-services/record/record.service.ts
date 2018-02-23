import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Classroom} from '../../models/api';
import {HttpClient} from '@angular/common/http';
import {EnviromentService} from '../enviroment/enviroment.service';
import {Record} from '../../models/record';

@Injectable()
export class RecordService {
  urlEnv: string;

  constructor(
    private env: EnviromentService,
    private http: HttpClient

  ) {

    this.urlEnv = this.env.base;
  }

  getRecordByUser(
    userId: number
  ): Observable<Record[]>{
    const url = this.urlEnv + 'api/Records/byUser/' + userId;
    return this.http.get<Record[]>(url);
  }

}
