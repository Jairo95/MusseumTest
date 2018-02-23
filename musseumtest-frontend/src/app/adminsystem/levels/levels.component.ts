import { Component, OnInit } from '@angular/core';
import {Classroom} from '../../models/classroom';
import {SessionService} from '../../shared-services/session/session.service';
import {ClassroomService} from '../../shared-services/classroom/classroom.service';
import {logging} from 'selenium-webdriver';
import Level = logging.Level;
import {LevelService} from '../../shared-services/level/level.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {


  cols: any[];
  levels: Level[] = [];
  selectedLevel: Level;
  userSession: number;
  rolSession: string;

  constructor(
    private sessionService: SessionService,
    private levelService: LevelService
  ) {
    this.userSession = this.sessionService.USERID;
    this.rolSession = this.sessionService.USER;

  }

  ngOnInit() {
    this.getLevels();
    this.defineLevelCols();
  }



  onLevelSelected() {

  }

  getLevels(){
    this.levelService.getLevels().subscribe(
      res => {
        this.levels = res;
      }
    );
  }

  defineLevelCols() {
    this.cols = [
      {field: 'Name', header: 'Nivel'},
      {field: 'Rank', header: 'Rango'},
      {field: 'Description', header: 'Descripción'}
    ];
  }

}
