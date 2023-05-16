import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from 'src/app/shared/types/category.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent {
  @Input()
  answer!: Answer;

  @Output()
  selected = new EventEmitter<Answer>();

  onSelected() {
    this.selected.emit(this.answer);
    console.log(this.answer);
    
  }
}
