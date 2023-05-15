import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Questions } from 'src/app/shared/types/category.model';

export interface CategoryState {
  loaded: boolean;
  loading: boolean;
  questions: Questions[];
}

@Injectable({
  providedIn: 'root'
})

export class QuestionsStateService {

  private state$ = new BehaviorSubject<CategoryState>({
    loaded: false,
    loading: false,
    questions: [],
  });

  getState(): Observable<CategoryState> {
    return this.state$.asObservable();
  }

  setQuestions(questions: Questions[]) {
    this.state$.next({
      ...this.state$.getValue(),
      questions: questions
    });
  }

  setLoading(loading: boolean) {
    this.state$.next({
      ...this.state$.getValue(),
      loading: loading,
    });
  }

  setLoaded(loaded: boolean) {
    this.state$.next({
      ...this.state$.getValue(),
      loaded: loaded,
    });
  }
}
