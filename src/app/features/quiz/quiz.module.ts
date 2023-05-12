import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizCategorySelectPageComponent } from './pages/quiz-category-select-page/quiz-category-select-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    QuizCategorySelectPageComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    SharedModule,
  ]
})
export class QuizModule { }
