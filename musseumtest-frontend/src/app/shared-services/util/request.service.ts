import { Injectable } from '@angular/core';

@Injectable()
export class RequestService {

  constructor() { }

  getUrlSeaarchParamas(parametersToAdd: {}): string {
    let params: URLSearchParams = new URLSearchParams();
    for(let key in parametersToAdd)
      params.append(key, parametersToAdd[key]);
    return params.toString();
  }

}
