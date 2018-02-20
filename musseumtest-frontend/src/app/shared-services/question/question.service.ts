import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EnviromentService} from '../enviroment/enviroment.service';
import {Observable} from 'rxjs/Observable';
import {Question} from '../../models/question';
import {User} from '../../models/api';
import {RequestService} from '../util/request.service';

@Injectable()
export class QuestionService {

  urlEnv: string;
  urlBase = 'http://localhost:50446';

  constructor(
    private env: EnviromentService,
    private http: HttpClient,
    private req: RequestService
  ) {
    this.urlEnv = this.env.base;
  }
  insertQuestion(question : Question): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
    };
    const url = this.urlBase + '/api/Questions/';
    const body = new URLSearchParams();

    return this.http.post<Question>(url, this.req.getUrlSeaarchParamas(question), httpOptions);
  }

}
