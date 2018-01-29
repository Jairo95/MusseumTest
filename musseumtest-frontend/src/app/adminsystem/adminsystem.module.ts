import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { AdminsystemComponent } from './adminsystem/adminsystem.component';

const routes: Routes = [
  {path: '', component: AdminsystemComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminsystemComponent]
})
export class AdminsystemModule { }
