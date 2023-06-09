import { Injectable } from '@angular/core';
import { QuestionsApiService } from '../core/async/questions-api.service';
import { QuestionsStateService } from '../core/state/questions-state.service';
import { distinctUntilChanged, map, shareReplay, tap } from 'rxjs';
import { Question } from '../../types/category.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsFacadeService {

  constructor(
    private questionsState: QuestionsStateService,
    private questionsApi: QuestionsApiService,
  ) { }

  readonly allCategoryQuestions$ = this.questionsState
  .getState()
  .pipe(
    tap(state => console.log(state)),
    map(state => {
      return state.questions
    }),
    distinctUntilChanged(),
    shareReplay(1),
  )
}
