import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {SharedModule} from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    SharedModule,
    FormsModule,
    PasswordModule
  ],
  declarations: [LandingComponent, LoginComponent]
})
export class PublicModule { }
