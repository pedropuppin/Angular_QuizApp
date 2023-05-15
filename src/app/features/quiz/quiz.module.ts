import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizCategorySelectPageComponent } from './pages/quiz-category-select-page/quiz-category-select-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuestionAndAnswersComponent } from './components/question-and-answers/question-and-answers.component';
import { QuizGameBoardComponent } from './components/quiz-game-board/quiz-game-board.component';
import { GamePageComponent } from './pages/game-page/game-page.component';


@NgModule({
  declarations: [
    QuizCategorySelectPageComponent,
    QuestionAndAnswersComponent,
    QuizGameBoardComponent,
    GamePageComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    SharedModule,
  ]
})
export class QuizModule { }
