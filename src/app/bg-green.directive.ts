import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgGreen]'
})
export class BgGreenDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'green';
  }

}
