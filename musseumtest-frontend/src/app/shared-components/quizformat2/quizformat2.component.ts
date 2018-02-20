import { Component, OnInit } from '@angular/core';
import {Question} from '../../models/question';
import {QuestionService} from '../../shared-services/question/question.service';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-mt-quizformat2',
  templateUrl: './quizformat2.component.html',
  styleUrls: ['./quizformat2.component.css']
})
export class Quizformat2Component implements OnInit {

  selectedValue: string ;
  question : Question = new Question();
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
