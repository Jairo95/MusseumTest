import { Component, OnInit } from '@angular/core';
import {Record} from '../../models/record';
import {RecordService} from '../../shared-services/record/record.service';
import {SessionService} from '../../shared-services/session/session.service';

import moment = require('moment'); moment();

@Component({
  selector: 'app-userreport',
  templateUrl: './userreport.component.html',
  styleUrls: ['./userreport.component.css']
})
export class UserreportComponent implements OnInit {

  records: Record[];
  cols: any[];
  selectedRecord: Record;
  username: string;


  constructor(
    private sessionService: SessionService,
    private recordService: RecordService
  ) {
    this.username = sessionService.USERNAME;
  }

  ngOnInit() {
    this.getRecordByUser(this.sessionService.USERID);
    this.defineRecordsCols();
  }

  defineRecordsCols() {
    console.log('[Username:]: ', this.username);
    this.username = localStorage.getItem('username');
    this.cols = [
      {field: 'DateStart', header: 'Fecha'},
      {field: 'Grade', header: 'Nota'}
    ];
  }

  getRecordByUser(userId: number) {
    this.recordService.getRecordByUser(userId)
      .subscribe(res=>{
        this.records = [];
        res.map( record => {
          console.log('[DATE]: ', moment(record.DateStart).format('YYYY-MM-DD'));
          record.DateStart = moment(moment(record.DateStart).format('YYYY-MM-DD')).toDate();
          this.records.push(record);
        })
      });
  }

  onRecordSelected(){

  }

}
