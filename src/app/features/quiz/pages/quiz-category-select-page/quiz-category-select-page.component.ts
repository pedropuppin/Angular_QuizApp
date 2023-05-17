import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionsApiService } from 'src/app/shared/services/core/async/questions-api.service';
import { CategoriesFacadeService } from 'src/app/shared/services/facade/categories-facade.service';
import { Category } from 'src/app/shared/types/category.model';
import { User } from 'src/app/shared/types/user.model';

@Component({
  templateUrl: './quiz-category-select-page.component.html',
  styleUrls: ['./quiz-category-select-page.component.scss']
})
export class QuizCategorySelectPageComponent {

  constructor(
    private questionsApi: QuestionsApiService,
    private categoryFacade: CategoriesFacadeService
  ) { }

  categories: Category[] = [];
  user!: User;
  loading: boolean = true;

  ngOnInit(): void {
    this.questionsApi.getCategories().subscribe(categories => {
      this.categories = categories;
      this.loading = false;
    });
    const userSessionStorage = sessionStorage.getItem('user');
    if(userSessionStorage) this.user = JSON.parse(userSessionStorage);
  }
}
