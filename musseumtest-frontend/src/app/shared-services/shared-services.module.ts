    import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MessageService} from 'primeng/components/common/messageservice';

import {PersonService} from './person/person.service';
import {EnviromentService} from './enviroment/enviroment.service';
import {ClassroomService} from './classroom/classroom.service';
import {RolService} from './rol/rol.service';
import {UserService} from './user/user.service';
import {SessionService} from './session/session.service';
import {RequestService} from './util/request.service';
    import {QuestionService} from './question/question.service';
    import {RecordService} from './record/record.service';
    import {CategoryService} from './category/category.service';
    import {LevelService} from './level/level.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    PersonService,
    EnviromentService,
    RolService,
    ClassroomService,
    UserService,
    SessionService,
    RequestService,
    MessageService,
    QuestionService,
    RecordService,
    CategoryService,
    LevelService
  ]
})
export class SharedServicesModule { }
