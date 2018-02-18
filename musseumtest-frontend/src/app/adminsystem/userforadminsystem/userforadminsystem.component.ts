import { Component, OnInit } from '@angular/core';

import {Person} from '../../models/api';

@Component({
  selector: 'app-userforadminsystem',
  templateUrl: './userforadminsystem.component.html',
  styleUrls: ['./userforadminsystem.component.css']
})
export class UserforadminsystemComponent implements OnInit {

  isModeList: boolean;
  isForPeople: string;
  person: Person;

  constructor() {
    this.isModeList = true;
  }

  ngOnInit() {
  }

  onPersonSelected(
    event: {person: Person}
  ) {
    console.log('[EVENT]: ', event.person);
    this.person = event.person
    this.isForPeople = 'view';
    this.isModeList = false;
  }

  createUser(){
    this.isForPeople = 'new';
  }
}
