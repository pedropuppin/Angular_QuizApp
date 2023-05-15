import { Injectable } from '@angular/core';
import { QuestionsApiService } from '../core/async/questions-api.service';
import { QuestionsStateService } from '../core/state/questions-state.service';
import { QuestionsState } from '../../types/category.model';
import { Observable, distinctUntilChanged, map, mergeMap, shareReplay, take, tap } from 'rxjs';

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
