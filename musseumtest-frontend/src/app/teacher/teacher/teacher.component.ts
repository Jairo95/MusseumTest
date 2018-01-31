import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  selectedtypeQuestion: string;
  typeQuestions: SelectItem[];


  constructor() {
  }

  ngOnInit() {
    this.typeQuestions = [
      {label: 'Pregunta simpe', value: '1'},
      {label: 'Pregunta Verdadero o falso', value: '2'},
      {label: 'pregunta selección única respuesta respuesta', value: '3'},
      {label: 'pregunta selección múltiple', value: '4'},
    ];
    console.log(this.typeQuestions);
  }

}
