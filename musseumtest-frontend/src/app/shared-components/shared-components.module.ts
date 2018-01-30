import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavtopComponent } from './navtop/navtop.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavtopComponent
  ],
  exports: [
    NavtopComponent
  ]
})
export class SharedComponentsModule { }
