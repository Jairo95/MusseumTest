import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  USER: string;
  USERNAME: string;
  USERID: number;
  STATUS: string;

  constructor() {
  }
  getSession(){
    this.USER = localStorage.getItem('user');
    this.USERID = Number(localStorage.getItem('id'));
    this.USERNAME = localStorage.getItem('username');
    this.STATUS = localStorage.getItem('status');
  }

}
