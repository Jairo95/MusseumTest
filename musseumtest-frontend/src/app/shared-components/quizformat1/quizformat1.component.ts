import { Component, OnInit } from '@angular/core';
import {Question} from '../../models/question';
import {QuestionService} from '../../shared-services/question/question.service';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-quizformat1',
  templateUrl: './quizformat1.component.html',
  styleUrls: ['./quizformat1.component.css']
})
export class Quizformat1Component implements OnInit {

  questionFormat1: string;
  respFormat1: string;
  question : Question = new Question();
  questionRes: Question = new Question();
  constructor(private questionService: QuestionService,
              private messageService: MessageService
  ) { }

  ngOnInit() {
  }
  save(){
    this.question.CategoryId=1;
    this.question.Observation="simple";
    this.question.QuizId=5;
    console.log('question: ', this.question);
    this.questionService.insertQuestion(this.question).subscribe(res=>{

      this.messageService.add({severity:'success', summary:'Success Message', detail:'Pregunta ha sido guardada exitosamente!'});
    });
    this.question=new Question();
  }
}
