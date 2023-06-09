import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Question } from 'src/app/shared/types/category.model';

export interface QuestionsState {
  loaded: boolean;
  loading: boolean;
  questions: Question[];
}

@Injectable({
  providedIn: 'root'
})

export class QuestionsStateService {
  private state$ = new BehaviorSubject<QuestionsState>({
    loaded: false,
    loading: false,
    questions: [],
  });

  getState(): Observable<QuestionsState> {
    return this.state$.asObservable();
  }

  setQuestions(questions: Question[]) {
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
