import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Category} from '../../models/category';
import {HttpClient} from '@angular/common/http';
import {EnviromentService} from '../enviroment/enviroment.service';

@Injectable()
export class CategoryService {
  urlEnv: string;
  constructor(
    private env: EnviromentService,
    private http: HttpClient
  ) {
    this.urlEnv = this.env.base;
  }

  getCategories(): Observable<Category[]> {
    const url = this.urlEnv + 'api/Categories';
    return this.http.get<Category[]>(url);
  }

}
