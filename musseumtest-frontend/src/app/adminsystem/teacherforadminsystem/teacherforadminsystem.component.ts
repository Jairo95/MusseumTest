import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacherforadminsystem',
  templateUrl: './teacherforadminsystem.component.html',
  styleUrls: ['./teacherforadminsystem.component.css']
})
export class TeacherforadminsystemComponent implements OnInit {

  rolToShow: number;
  header: string;
  constructor() { }

  ngOnInit() {
    this.rolToShow = 2;
    this.header = 'Profesores'
  }

}
