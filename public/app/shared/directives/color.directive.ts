import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
        selector: '[myColor]'
    })
export class ColorDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.color = '#B83901';
    }
}
