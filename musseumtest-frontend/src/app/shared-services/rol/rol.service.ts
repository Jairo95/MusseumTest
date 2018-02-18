import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {EnviromentService} from '../enviroment/enviroment.service';
import {Rol} from '../../models/api';

@Injectable()
export class RolService {

  urlEnv: string;
  ROLS: Rol[];

  constructor(
    private env: EnviromentService,
    private http: HttpClient
  ) {
    this.urlEnv = this.env.base;
  }

  getRols(){
    const url = this.urlEnv + 'api/Rols';
    this.http.get<Rol[]>(url).subscribe(
      res => {
        this.ROLS = res;
      }
    );
  }

  findRoldById(
    rolId: number
  ): Rol {
    let rolsFound: Rol[] = this.ROLS.filter(  rol => rol.RolId===rolId);
    return rolsFound[0];
  }
}
