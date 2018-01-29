import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    RoutesRoutingModule,
    ButtonModule
  ],
  declarations: [DashboardComponent]
})
export class RoutesModule { }
