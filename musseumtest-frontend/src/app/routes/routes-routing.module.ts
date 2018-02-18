import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserRolGuard} from '../guard/userrol.guard';
import {AdminSystemRolGuard} from '../guard/adminsystemrol.guard';
import {AdminContentRolGuard} from '../guard/admincontentrol.guard';
import {TeacherRolGuard} from '../guard/teacherrol.guard';

import {DashboardComponent} from './dashboard/dashboard.component';
import {NotFoundComponent} from '../shared-components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
      {path: 'adminsystem', canActivate: [AdminSystemRolGuard], loadChildren: '../adminsystem/adminsystem.module#AdminsystemModule'},
      {path: 'admincontent', canActivate: [AdminContentRolGuard], loadChildren: '../admincontent/admincontent.module#AdmincontentModule'},
      {path: 'quiz', loadChildren: '../quiz/quiz.module#QuizModule'},
      {path: 'teacher', canActivate: [TeacherRolGuard], loadChildren: '../teacher/teacher.module#TeacherModule'},
      {path: 'user', canActivate: [UserRolGuard], loadChildren: '../user/user.module#UserModule'},
      {path: '**', pathMatch: 'full', component: NotFoundComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
