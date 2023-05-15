import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { QuestionsApiService } from 'src/app/shared/services/core/async/questions-api.service';
import { Category, Question } from 'src/app/shared/types/category.model';

@Component({
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent {

  category?: Category;

  constructor(
    private activateRoute: ActivatedRoute,
    private questionsApi: QuestionsApiService
  ) {}

  ngOnInit():void {
    this.activateRoute.params
    .pipe(
      map(params => parseInt(params['id'])),
      switchMap(categoryId => this.questionsApi.getCategoryById(categoryId))
    )
    .subscribe(category => {
      this.category = category
      console.log(this.category.questions);
      console.log(this.category.questions[0].answers);
    });
  }
}
