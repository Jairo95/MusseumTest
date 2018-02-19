import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Question} from '../../models/question';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  questions = [];
  question: Question = new Question();
  constructor(private userService: UserService ) { }

  ngOnInit() {
    for ( let i = 0 ; i < 5 ; i++){
      let q = new Question();
      q.CategoryId = i;
      q.Description = "pregunta:"+i;
      q.Observation = "observacion:"+i;
      q.QuestionId = i;
      this.questions.push(q);
    }
    this.userService.getQuestions(1).subscribe(response => console.log(response));
  }

}
