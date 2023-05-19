import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, map, switchMap, takeWhile } from 'rxjs';
import { QuestionsApiService } from 'src/app/shared/services/core/async/questions-api.service';
import { Answer, Category, Question } from 'src/app/shared/types/category.model';

@Component({
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent {

  category?: Category;
  randomQuestions?: Question[];
  timer$?: any;
  currentIndex: number = 0;
  correctAnswer: number = 0;
  wrongAnswer: number = 0;
  points: number = 0;
  counter: number = 60;
  progressBar: string = '0%';
  isQuizCompleted: boolean = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private questionsApi: QuestionsApiService,
    private router: Router,
  ) {}

  ngOnInit():void {
    this.activateRoute.params
    .pipe(
      map(params => parseInt(params['id'])),
      switchMap(categoryId => this.questionsApi.getCategoryById(categoryId))
    )
    .subscribe(category => {
      this.category = category
      this.randomQuestions = this.getRandomQuestions(5);
    });
    this.startCounter();
    console.log(this.activateRoute.params);
  }

  getRandomQuestions(numQuestions: number): Question[] {
    if (this.category && this.category.questions.length > 0) {
      const randomQuestions: Question[] = [];
      const allQuestions = this.category.questions;
      while (randomQuestions.length < numQuestions) {
        const randomIndex = Math.floor(Math.random() * allQuestions.length);
        const randomQuestion = allQuestions[randomIndex];
        if (!randomQuestions.includes(randomQuestion)) {
          randomQuestions.push(randomQuestion);
        }
      }
      return randomQuestions;
    }
    return [];
  }

  startCounter() {
    this.timer$ = interval(1000)
    this.timer$.pipe(takeWhile(() => this.counter > 0))
    .subscribe(() => {
      this.counter--;
      if (this.counter === 0 && this.isQuizCompleted === false) {
        this.currentIndex++;
        this.counter = 60;
        this.points -= 10;
      } else if (this.currentIndex === this.randomQuestions!.length) {
        this.isQuizCompleted = true;
        return;
      }
    });
    setTimeout(() => {
      this.timer$.unsubscribe();
    }, 600000);
  }

  onSelectedChanged(answer: Answer) {
    if (answer.isCorrect) {
      this.points += 10;
      this.correctAnswer++;
    } else {
      this.points -= 10;
      this.wrongAnswer++;
    }
    setTimeout(() => {
      this.nextQuestion();
    }, 300);
  }

  nextQuestion(): void {
    if(this.currentIndex === this.randomQuestions!.length - 1) {
      this.isQuizCompleted = true;
      return;
    }
    if(this.currentIndex < this.randomQuestions!.length - 1) {
      this.currentIndex++;
      this.progressBar = ((this.currentIndex / this.randomQuestions!.length) * 100).toString();
    }
    this.counter = 60;
  }

  restartQuiz(): void {
    this.randomQuestions = this.getRandomQuestions(5);
    this.isQuizCompleted = false;
    this.points = 0;
    this.currentIndex = 0;
    this.correctAnswer = 0;
    this.wrongAnswer = 0;
    this.progressBar = "0";
    this.counter = 60;
  }

  exit(){
    this.router.navigateByUrl('categories');
  }
}
