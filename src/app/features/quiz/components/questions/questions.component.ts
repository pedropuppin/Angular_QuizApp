import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Question } from 'src/app/shared/types/category.model';

@Component({
  selector: 'app-question',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent {
  @Input()
  question!: Question;
}
