import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PersonService} from './person/person.service';
import {EnviromentService} from './enviroment/enviroment.service';
import {ClassroomService} from './classroom/classroom.service';
import {RolService} from './rol/rol.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    PersonService,
    EnviromentService,
    RolService,
    ClassroomService
  ]
})
export class SharedServicesModule { }
