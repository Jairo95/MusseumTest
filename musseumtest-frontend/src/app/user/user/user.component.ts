import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Question} from '../../models/question';
import {QuizaView} from '../../models/quizaView';
import {UserService} from './user.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  display: boolean = false;
  answers: {} = {};
  sizeQuestion: number = 0;

  userN: String = localStorage.getItem('username');
  userId: String = localStorage.getItem('id');
  grade: number = 0;
  questions: QuizaView = new QuizaView();
  answersCorrect = [] ;

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
    this.display = true;
    this.calculateGrade();
    let classroom = localStorage.getItem('classroom');

    this.userService.insertRecord(5,this.userId, this.grade/this.sizeQuestion ).subscribe(response => {
      console.log('response: ' , response);
    });
  }

  calculateGrade(){
    this.grade = 0;
    this.sizeQuestion = this.questions.Questions.length;
    for(let i = 0 ; i < this.questions.Questions.length; i++)
    {
      this.answersCorrect = this.questions.Questions[i].Answers;
      let quizID = this.questions.QuizId;
      for(let j = 0 ; j < this.answersCorrect.length; j++) {
        console.log('answers', this.answersCorrect[j]);
        let idSearch = quizID + "-" + this.answersCorrect[j].QuestionId;
        console.log('compare answers with', this.answers[idSearch]);
        if (this.answersCorrect[j].Description === this.answers[idSearch]) {
          this.grade++;
          j = this.answersCorrect.length;
        }
      }
    }
  }


}

