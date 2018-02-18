import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { AdminsystemComponent } from './adminsystem/adminsystem.component';
import { UserforadminsystemComponent } from './userforadminsystem/userforadminsystem.component';



import {FormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';

const routes: Routes = [
  {path: '', component: AdminsystemComponent},
  {path: 'users', component: UserforadminsystemComponent},
  {path: 'teachers', component: AdminsystemComponent},
  {path: 'adminsystems', component: AdminsystemComponent},
  {path: 'admincontents', component: AdminsystemComponent},
  {path: 'quizzes', component: AdminsystemComponent},
  {path: 'reports', component: AdminsystemComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedComponentsModule,

    FormsModule,
    InputTextModule,
    RadioButtonModule,
    RouterModule,
    CheckboxModule,
    CardModule,
    FieldsetModule,
    TableModule,
    DropdownModule
  ],
  declarations: [AdminsystemComponent, UserforadminsystemComponent]
})
export class AdminsystemModule { }
