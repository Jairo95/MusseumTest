import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
      {path: 'adminsystem', loadChildren: '../adminsystem/adminsystem.module#AdminsystemModule'},
      {path: 'admincontent', loadChildren: '../admincontent/admincontent.module#AdmincontentModule'},
      {path: 'quiz', loadChildren: '../quiz/quiz.module#QuizModule'},
      {path: 'teacher', loadChildren: '../teacher/teacher.module#TeacherModule'},
      {path: 'user', loadChildren: '../user/user.module#UserModule'}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
