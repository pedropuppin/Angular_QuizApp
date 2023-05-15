import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionsApiService } from 'src/app/shared/services/core/async/questions-api.service';
import { Category } from 'src/app/shared/types/category.model';

@Component({
  templateUrl: './quiz-category-select-page.component.html',
  styleUrls: ['./quiz-category-select-page.component.scss']
})
export class QuizCategorySelectPageComponent {

  constructor(
    private questionsApi: QuestionsApiService,
  ) { }

  categories: Category[] = [];

  ngOnInit() {
    this.questionsApi.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
