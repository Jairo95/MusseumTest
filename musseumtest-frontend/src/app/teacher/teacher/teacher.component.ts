import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  selectedtypeQuestion: SelectItem;
  typeQuestions: SelectItem[];


  constructor() {
    this.typeQuestions = [
      {label: 'Selecciones tipo de pregunta', value: '0'},
      {label: 'Pregunta simpe', value: '1'},
      {label: 'Pregunta Verdadero o falso', value: '2'},
      {label: 'pregunta selección única respuesta respuesta', value: '3'},
      {label: 'pregunta selección múltiple', value: '4'},
    ];
    this.selectedtypeQuestion = this.typeQuestions[0];
    console.log(this.typeQuestions);
  }

  ngOnInit() {
  }

}
