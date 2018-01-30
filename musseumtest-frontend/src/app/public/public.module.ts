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

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    SharedModule,
    FormsModule
  ],
  declarations: [LandingComponent, LoginComponent]
})
export class PublicModule { }
