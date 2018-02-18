import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PersonService} from './person/person.service';
import {EnviromentService} from './enviroment/enviroment.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    PersonService,
    EnviromentService
  ]
})
export class SharedServicesModule { }
