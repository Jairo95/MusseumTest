import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navtop',
  templateUrl: './navtop.component.html',
  styleUrls: ['./navtop.component.css']
})
export class NavtopComponent implements OnInit {

  user: string;
  home: string;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.defineHome();
    console.log('[NAV TOP]: ', this.user);
  }

  defineHome() {
    this.home = '/musseum/' + this.user;
  }

}
