import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
        selector: '[myUppercase]'
    })
export class UppercaseDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.textTransform  = 'uppercase';
    }
}
