import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quizformat1Component } from './quizformat1/quizformat1.component';
import { Quizformat2Component } from './quizformat2/quizformat2.component';
import { Quizformat3Component } from './quizformat3/quizformat3.component';
import { Quizformat4Component } from './quizformat4/quizformat4.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Quizformat1Component,
    Quizformat2Component,
    Quizformat3Component,
    Quizformat4Component
  ],
  exports: [
    Quizformat1Component,
    Quizformat2Component,
    Quizformat3Component,
    Quizformat4Component
  ]
})
export class SharedComponentsModule { }
