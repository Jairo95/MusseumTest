import { Component, OnInit } from '@angular/core';

import {RolService} from '../../shared-services/rol/rol.service';
import {SessionService} from '../../shared-services/session/session.service';

import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private rolService: RolService,
    private sessionService: SessionService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.rolService.getRols();
    this.sessionService.getSession();
  }
}
