import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Person} from '../../../models/api';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  @Input() rol: number;
  @Input() classrom: any;
  @Input() person: Person;
  @Output() finish: EventEmitter<{finished: boolean}> = new EventEmitter<{finished: boolean}>();

  selectedClassroom: any;
  classrooms: any[];

  constructor() { }

  ngOnInit() {
    this.getClassrooms(1, 'adminsystem');
  }

  back() {
    this.finish.emit({finished: true});
  }

  save(){
    this.finish.emit({finished: true});
  }

  getClassrooms(
    user: number,
    rol: string
  ){
    this.classrooms = [
      {label: 'Selecciones clase', code: '0'}
    ];
  }

}
