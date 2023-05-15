import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { QuestionsApiService } from 'src/app/shared/services/core/async/questions-api.service';
import { Category } from 'src/app/shared/types/category.model';

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
    .subscribe(category => this.category = category);
  }
}


// this.activatedRoute
// .params // é um observable que emite os parâmetros da rota ativa
// .pipe(
//   map(params => params.id), // transforma os parâmetros da rota em um observable que emite o id do 'todo'
//   switchMap(todoId => this.todosFacade.getTodoById(todoId)) // toda vez que chegar um novo id, vamos fazer a requisição pro facadeService
// )
// .subscribe(todoState => this.todoState = todoState);

// subscribe((params) => {
//   const categoryId = parseInt(params['id']);
//   this.questionsApi.getCategoryById(categoryId).subscribe((category) => {
//     this.category = category;
//   });
