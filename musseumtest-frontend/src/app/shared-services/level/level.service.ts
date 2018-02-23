import { Injectable } from '@angular/core';
import {Classroom} from '../../models/api';
import {logging} from 'selenium-webdriver';
import Level = logging.Level;
import {HttpClient} from '@angular/common/http';
import {EnviromentService} from '../enviroment/enviroment.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LevelService {
  urlEnv: string;

  constructor(
    private env: EnviromentService,
    private http: HttpClient
  ) {
    this.urlEnv = this.env.base;
  }

  getLevels(): Observable<Level[]> {
    const url = this.urlEnv + 'api/Levels';
    return this.http.get<Level[]>(url);
  }

}
