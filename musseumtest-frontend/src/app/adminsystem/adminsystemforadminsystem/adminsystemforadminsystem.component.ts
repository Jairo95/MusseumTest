import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminsystemforadminsystem',
  templateUrl: './adminsystemforadminsystem.component.html',
  styleUrls: ['./adminsystemforadminsystem.component.css']
})
export class AdminsystemforadminsystemComponent implements OnInit {

  rolToShow: number;
  header: string;

  constructor() { }

  ngOnInit() {
    this.rolToShow = 4;
    this.header = "Administradores de sistema"
  }

}
