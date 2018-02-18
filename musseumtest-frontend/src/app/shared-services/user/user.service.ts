import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EnviromentService} from '../enviroment/enviroment.service';
import {Observable} from 'rxjs/Observable';

import {RequestService} from '../util/request.service';

import {Person, User} from '../../models/api';

@Injectable()
export class UserService {

  urlEnv: string;

  constructor(
    private http: HttpClient,
    private env: EnviromentService,
    private req: RequestService
  ) {
    this.urlEnv = this.env.base;
  }

  getUserByIdPerson(
    personId: number,
    rolId: number
  ): Observable<User> {
    const url = this.urlEnv + 'api/Users/' + personId + '/' + rolId;
    return this.http.get<User>(url);
  }

  saveUser(
    user: User
  ): Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
    };
    const url = this.urlEnv + 'api/Users';
    return this.http.post<User>(url, this.req.getUrlSeaarchParamas(user), httpOptions);
  }

}
