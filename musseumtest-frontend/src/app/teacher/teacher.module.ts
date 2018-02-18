import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import {SharedComponentsModule} from '../shared-components/shared-components.module';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';

const routes: Routes = [
  {path: '', component: TeacherComponent},
  {path: 'class', component: TeacherComponent},
  {path: 'users', component: TeacherComponent},
  {path: 'quizzes', component: TeacherComponent},
  {path: 'reports', component: TeacherComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedComponentsModule,
    DropdownModule,
    FormsModule,
    InputTextModule
  ],
  declarations: [TeacherComponent]
})
export class TeacherModule { }
