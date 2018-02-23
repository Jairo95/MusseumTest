import { Component, OnInit } from '@angular/core';
import {Classroom} from '../../models/classroom';
import {ClassroomService} from '../../shared-services/classroom/classroom.service';
import {SessionService} from '../../shared-services/session/session.service';




@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css']
})
export class ClassroomsComponent implements OnInit {

  cols: any[];
  classrooms: Classroom[] = [];
  selectedClassrooom: Classroom;
  userSession: number;
  rolSession: string;

  constructor(
    private sessionService: SessionService,
    private classroomService: ClassroomService
  ) {
    this.userSession = this.sessionService.USERID;
    this.rolSession = this.sessionService.USER;

  }

  ngOnInit() {
    this.getClassrooms();
    this.defineClassroomCols();
  }



  onClassRoomSelected() {

  }

  getClassrooms(){
this.classroomService.getClassrooms(this.userSession, this.rolSession).subscribe(
  res => {
    this.classrooms = res;
  }
);
}

  defineClassroomCols() {
    this.cols = [
      {field: 'Name', header: 'Nombre'},
      {field: 'Description', header: 'Descripcion'},
      {field: 'Observation', header: 'Observacion'}
    ];
  }
}
