import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from 'src/app/shared/types/category.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // diz pro angular que o componente não precisa ser atualizado a cada ciclo de detecção de mudança
  // ele só será atualizado quando o input for alterado. Melhora a performance
})
export class AnswerComponent {

  isSelected = false;

  @Input()
  answer!: Answer;

  @Output()
  selected = new EventEmitter<Answer>();

  onSelected() {
    this.isSelected = true
    this.selected.emit(this.answer);
  }
}
