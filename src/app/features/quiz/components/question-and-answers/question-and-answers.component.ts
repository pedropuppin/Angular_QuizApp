import { Component, Input } from '@angular/core';
import { Category, Questions } from 'src/app/shared/types/category.model';

@Component({
  selector: 'app-question-and-answers',
  templateUrl: './question-and-answers.component.html',
  styleUrls: ['./question-and-answers.component.scss']
})
export class QuestionAndAnswersComponent {

  @Input()
  questions!: Category[];

  ngOnInit() {
    console.log(this.questions);
  }
}
