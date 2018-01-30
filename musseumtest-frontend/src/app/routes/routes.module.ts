import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import {ButtonModule} from 'primeng/button';

import {SharedComponentsModule} from '../shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    RoutesRoutingModule,
    SharedComponentsModule,
    ButtonModule
  ],
  declarations: [DashboardComponent]
})
export class RoutesModule { }
