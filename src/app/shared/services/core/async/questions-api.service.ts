import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/types/category.model';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class QuestionsApiService {

  readonly apiPath = `${environment.apiPath}/categories`;

  options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiPath, this.options);
  }

  getCategoryById(id: number) {
    return this.http.get<Category>(this.apiPath + `/${id}`, this.options);
  }
}
