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
import {ButtonModule} from 'primeng/button';
import { TeacherforadminsystemComponent } from './teacherforadminsystem/teacherforadminsystem.component';
import { AdminsystemforadminsystemComponent } from './adminsystemforadminsystem/adminsystemforadminsystem.component';
import { AdmincontentforadminsystemComponent } from './admincontentforadminsystem/admincontentforadminsystem.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';

const routes: Routes = [
  {path: '', component: AdminsystemComponent},
  {path: 'users', component: UserforadminsystemComponent},
  {path: 'teachers', component: TeacherforadminsystemComponent},
  {path: 'adminsystems', component: AdminsystemforadminsystemComponent},
  {path: 'admincontents', component: AdmincontentforadminsystemComponent},
  {path: 'quizzes', component: AdminsystemComponent},
  {path: 'classrooms', component: ClassroomsComponent},
  {path: 'categories', component: AdminsystemComponent},
  {path: 'levels', component: AdminsystemComponent}
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
    DropdownModule,
    ButtonModule
  ],
  declarations: [AdminsystemComponent, UserforadminsystemComponent, TeacherforadminsystemComponent, AdminsystemforadminsystemComponent, AdmincontentforadminsystemComponent, ClassroomsComponent]
})
export class AdminsystemModule { }
