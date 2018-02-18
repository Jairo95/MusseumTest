import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavtopComponent } from './navtop/navtop.component';
import { Quizformat1Component } from './quizformat1/quizformat1.component';
import { Quizformat2Component } from './quizformat2/quizformat2.component';
import { Quizformat3Component } from './quizformat3/quizformat3.component';
import { Quizformat4Component } from './quizformat4/quizformat4.component';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

import { NavleftComponent } from './navleft/navleft.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchpeopleComponent } from './users/searchpeople/searchpeople.component';
import { PeopleComponent } from './users/people/people.component';
import { DynamicuserComponent } from './users/dynamicuser/dynamicuser.component';


@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    InputTextModule,
    RadioButtonModule,
    RouterModule,
    CheckboxModule,
    CardModule,
    FieldsetModule,
    TableModule,
    TabViewModule,
    ButtonModule,
    DropdownModule
  ],
  declarations: [
    NavtopComponent,
    Quizformat1Component,
    Quizformat2Component,
    Quizformat3Component,
    Quizformat4Component,
    NavleftComponent,
    NotFoundComponent,
    SearchpeopleComponent,
    PeopleComponent,
    DynamicuserComponent
  ],
  exports: [
    NavtopComponent,
    Quizformat1Component,
    Quizformat2Component,
    Quizformat3Component,
    Quizformat4Component,
    NavleftComponent,
    NotFoundComponent,
    SearchpeopleComponent,
    PeopleComponent,
    DynamicuserComponent
  ]
})
export class SharedComponentsModule { }
