import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {EnviromentService} from '../enviroment/enviroment.service';

import {Classroom} from '../../models/api';

@Injectable()
export class ClassroomService {

  urlEnv: string;

  constructor(
    private env: EnviromentService,
    private http: HttpClient
  ) {
    this.urlEnv = this.env.base;
  }

  getClassrooms(
    userId: number,
    rol: string
  ): Observable<Classroom[]>{
    const url = this.urlEnv + 'api/Classrooms';
    return this.http.get<Classroom[]>(url);
  }
}
