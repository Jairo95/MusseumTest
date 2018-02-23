import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';
import {InputTextModule} from 'primeng/inputtext';
import {SharedComponentsModule} from '../shared-components/shared-components.module';
import { UserService } from './user/user.service';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { UserreportComponent } from './userreport/userreport.component';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import {FieldsetModule} from 'primeng/fieldset';
import { UserquizComponent } from './userquiz/userquiz.component';


const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'reports', component: UserreportComponent}
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SharedComponentsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    RadioButtonModule,
    DialogModule,
    CardModule,
    TableModule,
    AccordionModule,
    FieldsetModule,
    RouterModule.forChild(routes)
  ], providers: [
    UserService
  ],
  declarations: [UserComponent, UserreportComponent, UserquizComponent]
})
export class UserModule { }
