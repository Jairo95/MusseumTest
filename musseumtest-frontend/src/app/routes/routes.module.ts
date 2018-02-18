import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import {ButtonModule} from 'primeng/button';
import {GrowlModule} from 'primeng/growl';

import {SharedComponentsModule} from '../shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    RoutesRoutingModule,
    SharedComponentsModule,
    ButtonModule,
    GrowlModule
  ],
  declarations: [DashboardComponent]
})
export class RoutesModule { }
