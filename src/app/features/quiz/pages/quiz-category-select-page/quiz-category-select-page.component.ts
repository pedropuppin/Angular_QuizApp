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

  //loading$ = this.categoryFacade.loading$;
  //categories$ = this.categoryFacade.allCategories$;
  categories: Category[] = [];
  user!: User;

  ngOnInit(): void {
    this.questionsApi.getCategories().subscribe(categories => {
      this.categories = categories;
    });
    const userSessionStorage = sessionStorage.getItem('user');
    if(userSessionStorage) this.user = JSON.parse(userSessionStorage);
  }
}

// const categories = this.categoryFacade.loadCategories();
// console.log(categories, this.categories$);

// this.categories$.subscribe(categories => {
//   console.log(categories);
// });
// const userSessionStorage = sessionStorage.getItem('user');
// if (userSessionStorage) this.user = JSON.parse(userSessionStorage);
