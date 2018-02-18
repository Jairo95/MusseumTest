import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AuthGuard } from './guard/auth.guard';
import { UserRolGuard } from './guard/userrol.guard';
import { TeacherRolGuard } from './guard/teacherrol.guard';
import { AdminContentRolGuard } from './guard/admincontentrol.guard';
import { AdminSystemRolGuard } from './guard/adminsystemrol.guard';

import { AppRoutingModule } from './app.routing';
import { PublicModule } from './public/public.module';
import { RoutesModule } from './routes/routes.module';
import { AdmincontentModule } from './admincontent/admincontent.module';
import { AdminsystemModule } from './adminsystem/adminsystem.module';
import { QuizModule } from './quiz/quiz.module';
import { TeacherModule } from './teacher/teacher.module';
import { UserModule } from './user/user.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { SharedServicesModule } from './shared-services/shared-services.module';

import {SharedModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {DataTableModule} from 'primeng/datatable';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    // module for development
    AppRoutingModule,
    PublicModule,
    RoutesModule,
    AdmincontentModule,
    AdminsystemModule,
    QuizModule,
    TeacherModule,
    UserModule,
    SharedComponentsModule,
    SharedServicesModule,
    // mdoule primeng
    SharedModule,
    ButtonModule,
    SplitButtonModule,
    DropdownModule,
    InputTextModule,
    DataTableModule

  ],
  providers: [
    AuthGuard,
    UserRolGuard,
    TeacherRolGuard,
    AdminContentRolGuard,
    AdminSystemRolGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
