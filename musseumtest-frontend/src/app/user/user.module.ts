import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'quizzes', component: UserComponent},
  {path: 'reports', component: UserComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,

  ],
  declarations: [UserComponent]
})
export class UserModule { }
