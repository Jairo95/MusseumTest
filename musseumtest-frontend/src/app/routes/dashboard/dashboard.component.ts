import { Component, OnInit } from '@angular/core';

import {RolService} from '../../shared-services/rol/rol.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private rolService: RolService
  ) { }

  ngOnInit() {
    this.rolService.getRols();
  }
}
