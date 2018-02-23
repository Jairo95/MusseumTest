import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Question} from '../../models/question';
import {QuizaView} from '../../models/quizaView';
import {UserService} from './user.service';
import {forEach} from '@angular/router/src/utils/collection';
import {Answer} from '../../models/answer';
import {Classroom} from '../../models/classroom';
import {SessionService} from '../../shared-services/session/session.service';
import {ClassroomService} from '../../shared-services/classroom/classroom.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  cols: any[];
  classrooms: Classroom[] = [];
  selectedClassrooom: Classroom;
  idClassroomSelected: number;
  userSession: number;
  rolSession: string;


  isQuiz: boolean = false;

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
    this.isQuiz = true;
    console.log('[CLASSROOM SELECTED]: ', this.selectedClassrooom);
    this.idClassroomSelected = this.selectedClassrooom.ClassroomId;
  }

  onFinishedTest(
    event: {status: boolean}
  ){
    this.isQuiz = false;
    this.selectedClassrooom = null;
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

