import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EnviromentService} from '../enviroment/enviroment.service';
import {RequestService} from '../util/request.service';

import {Person} from '../../models/api';


@Injectable()
export class PersonService {

    url: string;

  constructor(
    private env: EnviromentService,
    private http: HttpClient,
    private req: RequestService
  ) {
    this.url = this.env.base;
  }

  getPeople(
    rol: number,
    classrom: number
  ): Observable<Person[]> {
    const url = this.url + 'api/People'
    return this.http.get<Person[]>(url);
  }

  getPeopleByRolId(
    rolId: number
  ): Observable<Person[]> {
    const url = this.url + 'api/People/byRol/' + rolId;
    return this.http.get<Person[]>(url);
  }

  savePerson(
    person: Person
  ): Observable<Person>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
    };
    const url = this.url + 'api/People';
    return this.http.post<Person>(url, this.req.getUrlSeaarchParamas(person), httpOptions);
    //return null;
  }
}
