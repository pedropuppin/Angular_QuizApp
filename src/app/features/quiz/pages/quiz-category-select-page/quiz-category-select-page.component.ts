import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { QuestionsApiService } from 'src/app/shared/services/core/async/questions-api.service';
import { Category } from 'src/app/shared/types/category.model';

@Component({
  templateUrl: './quiz-category-select-page.component.html',
  styleUrls: ['./quiz-category-select-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizCategorySelectPageComponent {

  categories$: Observable<Category[]>;
  loading: boolean = true;

  constructor(
    private questionsApi: QuestionsApiService,
  ) {
    this.categories$ = this.questionsApi.getCategories().pipe(
      finalize(() => this.loading = false)
    );
  }
}
