import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'quizzes', component: UserComponent},
  {path: 'reports', component: UserComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserComponent]
})
export class UserModule { }
