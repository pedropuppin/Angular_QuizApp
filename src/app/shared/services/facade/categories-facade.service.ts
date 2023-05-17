import { Injectable } from '@angular/core';
import { Category, CategoryState } from '../../types/category.model';
import { QuestionsApiService } from '../core/async/questions-api.service';
import { CategoryStateService } from '../core/state/category-state.service';
import { Observable, distinctUntilChanged, finalize, map, of, shareReplay, switchMap, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesFacadeService {

  constructor(
    private questionsApi: QuestionsApiService,
    private categoryState: CategoryStateService,
  ) { }

  readonly allCategories$ = this.categoryState
  .getState()
  .pipe(
    tap(state => console.log(state)),
    map(state => {
      return state.categories
    }),
    distinctUntilChanged(),
    shareReplay(1),
  )

  readonly loading$ = this.categoryState
  .getState()
  .pipe(
    map((state) => state.loading),
    distinctUntilChanged(),
    shareReplay(1),
  );

  loadCategories(): Observable<Category[]> {
    return this.categoryState
      .getState()
      .pipe(
        take(1),
        switchMap((state) => {
          if(state.loaded) {
            return of(state.categories);
          } else {
            this.categoryState.setLoading(true);
            return this.questionsApi
              .getCategories()
              .pipe(
                tap((categories) => {
                  this.categoryState.setCategories(categories);
                  this.categoryState.setLoaded(true);
                }),
                finalize(() => {
                  this.categoryState.setLoading(false);
                })
              )
          }
        })
      )
  }
}
