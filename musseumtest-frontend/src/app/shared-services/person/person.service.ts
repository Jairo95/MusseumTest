import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EnviromentService} from '../enviroment/enviroment.service';

import {Person} from '../../models/api';


@Injectable()
export class PersonService {

    url: string;

  constructor(
    private env: EnviromentService,
    private http: HttpClient
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

}
