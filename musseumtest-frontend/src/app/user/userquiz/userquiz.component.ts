import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Question} from '../../models/question';
import {UserService} from '../user/user.service';
import {Answer} from '../../models/answer';
import {QuizaView} from '../../models/quizaView';
import {Person} from '../../models/api';

@Component({
  selector: 'app-userquiz',
  templateUrl: './userquiz.component.html',
  styleUrls: ['./userquiz.component.css']
})
export class UserquizComponent implements OnInit {

  @Input() classroomID: number;
  @Output() onFinishedTest: EventEmitter<{status: boolean}> = new EventEmitter();

  indexAccordion: number = 0;
  display: boolean = false;
  answers: {} = {};
  sizeQuestion: number = 0;
  userN: String = localStorage.getItem('username');
  userId: String = localStorage.getItem('id');
  grade: number = 0;
  questions: QuizaView = new QuizaView();
  answersCorrect = [] ;

  error: boolean = false;
  messageError: string;

  question: Question = new Question();
  constructor(private userService: UserService ) { }

  ngOnInit() {
    console.log('[Clase a buscar]: ', this.classroomID);
    this.userService.getQuizbyClass(this.classroomID).subscribe(response => {
      this.questions = response;
      if(this.questions.QuizId === 0){
        this.error = true;
        this.messageError = 'No existen trivias para la clase seleccionada';
      }
      console.log('response: ' , this.questions);
    });
  }

  sendResults() {
    this.display = true;
    this.calculateGrade();

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
      const quizID = this.questions.QuizId;
      const questionId = this.questions.Questions[i].QuestionId;
      const idSearch = quizID + '-' + questionId;

      console.log('[SELECTED]: ', this.answers[idSearch], ', [OPTIONS]: ', this.questions.Questions[i].Answers);
      let answerForStatus: Answer[] = this.questions.Questions[i].Answers.filter(
        answer => answer.Description === this.answers[idSearch]
      );
      if(answerForStatus == null || answerForStatus.length != 1) continue;

      if(answerForStatus[0].Status.Name === 'correcto') {
        this.grade++;
      }
    }
  }

  nextQuestion() {
    this.indexAccordion = (this.indexAccordion === this.questions.Questions.length -1)? 0: this.indexAccordion + 1;
  }

  finished(){
    this.onFinishedTest.emit({status: true});
  }


}
