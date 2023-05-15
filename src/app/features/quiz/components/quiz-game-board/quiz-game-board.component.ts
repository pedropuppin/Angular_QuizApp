import { Component, Input } from '@angular/core';
import { Answer, Question } from 'src/app/shared/types/category.model';

@Component({
  selector: 'app-quiz-game-board',
  templateUrl: './quiz-game-board.component.html',
  styleUrls: ['./quiz-game-board.component.scss']
})
export class QuizGameBoardComponent {
  @Input()
  question!: Question;

  @Input()
  answers!: Answer[];
}
