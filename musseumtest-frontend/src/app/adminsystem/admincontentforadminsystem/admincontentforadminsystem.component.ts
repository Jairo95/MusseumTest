import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admincontentforadminsystem',
  templateUrl: './admincontentforadminsystem.component.html',
  styleUrls: ['./admincontentforadminsystem.component.css']
})
export class AdmincontentforadminsystemComponent implements OnInit {

  rolToShow: number;
  header: string;

  constructor() { }

  ngOnInit() {
    this.rolToShow = 3;
    this.header = 'Administradores de contenido';
  }

}
