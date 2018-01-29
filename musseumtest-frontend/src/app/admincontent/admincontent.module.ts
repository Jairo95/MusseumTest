import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { AdmincontentComponent } from './admincontent/admincontent.component';

const routes: Routes = [
  {path: '', component: AdmincontentComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdmincontentComponent]
})
export class AdmincontentModule { }
