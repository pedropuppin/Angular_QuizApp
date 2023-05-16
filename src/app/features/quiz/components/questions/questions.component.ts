import { Component, Input } from '@angular/core';
import { Question } from 'src/app/shared/types/category.model';

@Component({
  selector: 'app-question',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionComponent {
  @Input()
  question!: Question;
}
