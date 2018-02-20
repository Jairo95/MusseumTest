import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { Uservalidate } from '../../models/uservalidate';
@Injectable()
export class UserService {
  urlBase = 'http://localhost:50446';
  constructor(   private http: HttpClient ) { }
  getQuestions(classromm ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
    };
    const url = this.urlBase + '/api/Questions'
    const body = new URLSearchParams();
    body.set('classroomOwner', classromm);
    console.log("url" + url);
    return this.http.get(url);
  }

  getQuizbyClass(classromm ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
    };
    const url = this.urlBase + '/api/Quizs/Maped/' + classromm
    const body = new URLSearchParams();
    console.log("url" + url);
    return this.http.get<any>(url);
  }

  insertRecord(idQuiz, idUser): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
    };
    const url = this.urlBase + '/api/Records/';
    const body = new URLSearchParams();
    body.set('UserId', idUser);
    body.set('QuizId', idQuiz);
    let date = new Date();
    let dateformat=date.getFullYear()+"/"+ date.getMonth()+"/"+ date.getDate();
    console.log("date",dateformat.trim())
    body.set('DateStart', dateformat.trim());
    body.set('DateEnd',dateformat.trim());
    body.set('Grade', "7");


    return this.http.post(url, body.toString(), httpOptions );
  }





}
