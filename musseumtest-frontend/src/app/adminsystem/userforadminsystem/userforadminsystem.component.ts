import { Component, OnInit } from '@angular/core';

import {Person} from '../../models/api';


@Component({
  selector: 'app-userforadminsystem',
  templateUrl: './userforadminsystem.component.html',
  styleUrls: ['./userforadminsystem.component.css']
})
export class UserforadminsystemComponent implements OnInit {

  rolToShow: number;
  header: string;
  constructor() {

  }

  ngOnInit() {
    this.rolToShow = 1;
    this.header = 'Usuarios/Estudiantes';
  }


}
