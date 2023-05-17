import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from 'src/app/shared/types/category.model';

export interface CategorysState {
  loaded: boolean;
  loading: boolean;
  categories: Category[];
}

@Injectable({
  providedIn: 'root'
})

export class CategoryStateService {

  private state$ = new BehaviorSubject<CategorysState>({
    loaded: false,
    loading: false,
    categories: [],
  });

  getState(): Observable<CategorysState> {
    return this.state$.asObservable();
  }

  setCategories(categories: Category[]) {
    this.state$.next({
      ...this.state$.getValue(),
      categories: categories
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
