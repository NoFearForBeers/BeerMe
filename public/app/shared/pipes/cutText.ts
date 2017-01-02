import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cutText'
})


export class CutTextPipe implements PipeTransform {
    transform(item: string) {
    const CHARS_TO_SHOW = 500;

        return item.substring(0, CHARS_TO_SHOW);
    }
}
