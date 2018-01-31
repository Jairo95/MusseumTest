import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavtopComponent } from './navtop/navtop.component';
import { Quizformat1Component } from './quizformat1/quizformat1.component';
import { Quizformat2Component } from './quizformat2/quizformat2.component';
import { Quizformat3Component } from './quizformat3/quizformat3.component';
import { Quizformat4Component } from './quizformat4/quizformat4.component';
import { NavleftComponent } from './navleft/navleft.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavtopComponent,
    Quizformat1Component,
    Quizformat2Component,
    Quizformat3Component,
    Quizformat4Component,
    NavleftComponent
  ],
  exports: [
    NavtopComponent,
    Quizformat1Component,
    Quizformat2Component,
    Quizformat3Component,
    Quizformat4Component,
    NavleftComponent
  ]
})
export class SharedComponentsModule { }
