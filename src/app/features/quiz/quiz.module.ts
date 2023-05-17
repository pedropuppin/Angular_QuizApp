import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizCategorySelectPageComponent } from './pages/quiz-category-select-page/quiz-category-select-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizGameBoardComponent } from './components/quiz-game-board/quiz-game-board.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { QuestionComponent } from './components/questions/questions.component';
import { AnswerComponent } from './components/answer/answer.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';

import { ChangeBgDirective } from 'src/app/shared/directives/change-bg.directive';


@NgModule({
  declarations: [
    QuizCategorySelectPageComponent,
    QuizGameBoardComponent,
    GamePageComponent,
    QuestionComponent,
    AnswerComponent,
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
  ]
})
export class QuizModule { }
