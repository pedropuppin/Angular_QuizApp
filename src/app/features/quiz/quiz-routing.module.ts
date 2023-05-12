import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/app/shared/guards/auth.guard';
import { QuizCategorySelectPageComponent } from './pages/quiz-category-select-page/quiz-category-select-page.component';

const routes: Routes = [
  { path:'', component: QuizCategorySelectPageComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
