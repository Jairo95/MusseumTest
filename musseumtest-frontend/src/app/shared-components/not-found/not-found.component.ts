import { Component, OnInit } from '@angular/core';
import {tokenReference} from '@angular/compiler';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  logged: boolean = false;

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('status')){
      this.logged = true
    }
  }

}
