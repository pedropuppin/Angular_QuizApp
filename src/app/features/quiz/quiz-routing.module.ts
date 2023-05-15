import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/app/shared/guards/auth.guard';
import { QuizCategorySelectPageComponent } from './pages/quiz-category-select-page/quiz-category-select-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';

const routes: Routes = [
  { path:'', component: QuizCategorySelectPageComponent, canActivate: [authGuard]},
  { path: ':id', component: GamePageComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
