import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Question} from '../../models/question';
import {UserService} from './user.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  answers: {} = {};

  questions = [];
  question: Question = new Question();
  constructor(private userService: UserService ) { }

  ngOnInit() {
   /* for ( let i = 0 ; i < 5 ; i++){
      let q = new Question();
    q.CategoryId = i;
    q.Description = "pregunta:"+i;
    q.Observation = "observacion:"+i;
    q.QuestionId = i;
    this.questions.push(q);
  }*/
   /* this.userService.getQuestions(1).subscribe(response => {
      this.questions = response;
      console.log('response: ' , this.questions);
    });*/

    this.userService.getQuizbyClass(5).subscribe(response => {
      this.questions = response;
      console.log('response: ' , this.questions);
    });
  }
  sendResults() {
    this.userService.insertRecord(5,1 ).subscribe(response => {
      console.log('response: ' , response);
    });

  }
  calculateGrade(){
    for ()

  }


}

