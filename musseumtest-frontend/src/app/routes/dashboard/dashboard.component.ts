import { Component, OnInit } from '@angular/core';

import {RolService} from '../../shared-services/rol/rol.service';
import {SessionService} from '../../shared-services/session/session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private rolService: RolService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.rolService.getRols();
    this.sessionService.getSession();
  }
}
