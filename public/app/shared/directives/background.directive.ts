import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
        selector: '[myBackground]'
    })
export class BackgroundDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.background = '#F8F0E5';
    }
}
