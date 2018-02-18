import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { Uservalidate } from '../../models/uservalidate';

@Injectable()
export class LoginService {
  urlBase = 'http://localhost:50446';

  constructor(
    private http: HttpClient
  ) { }


  login(email, password): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
    };
    const url = this.urlBase + '/api/Logins'
    const body = new URLSearchParams();
    body.set('Username', email);
    body.set('Password', password);
    return this.http.post(url, body.toString(), httpOptions );
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('status');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }
}
