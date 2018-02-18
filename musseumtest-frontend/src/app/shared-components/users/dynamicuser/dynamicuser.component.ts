import { Component, OnInit, Input } from '@angular/core';
import {Person} from '../../../models/api';

@Component({
  selector: 'app-dynamicuser',
  templateUrl: './dynamicuser.component.html',
  styleUrls: ['./dynamicuser.component.css']
})
export class DynamicuserComponent implements OnInit {

  isModeList: boolean;
  isForPeople: string;
  person: Person;
  @Input() rolInAction: number;
  @Input() header: string;

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
    this.isModeList = false;
  }

  onFinish(
    event: {finished: boolean}
  ) {
    this.isModeList = event.finished;
    this.person = null;
    this.isForPeople = null;
  }

}
