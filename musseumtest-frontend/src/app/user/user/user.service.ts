import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { Uservalidate } from '../../models/uservalidate';


export class UserService {
  urlBase = 'http://localhost:50446';
  constructor(   private http: HttpClient, ) { }
  getQuestions(classromm ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
    };
    const url = this.urlBase + '/api/Question'
    const body = new URLSearchParams();
    body.set('classroomOwner', classromm);

    return this.http.post(url, body.toString(), httpOptions );
  }
}
