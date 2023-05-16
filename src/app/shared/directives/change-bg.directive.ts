import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {


  @Input() appAnswerColor!: boolean;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    const isCorrect = changes['appAnswerColor'].currentValue;

    if (isCorrect) {
      this.el.nativeElement.style.backgroundColor = 'green';
    } else {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }
}
