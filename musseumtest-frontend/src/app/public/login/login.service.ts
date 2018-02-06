import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  urlBase: string = 'http://localhost:50446';

  constructor(
    private http: HttpClient
  ) { }


  login(email, password): Observable<any> {
    const login = { username: email, password: password };
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const options = { headers: headers , withCredentials: true };
    //return this.http.post(this.urlBase + "/musseum/Login", login, options);
    const url = this.urlBase + '/musseum/Login/' + email + '/' + password;
    console.log('[URL]: ', url);
    return this.http.get(url);
  }

  logout() {
    localStorage.removeItem('currentUser');
  }


}
