import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {path: '', component: TeacherComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeacherComponent]
})
export class TeacherModule { }
