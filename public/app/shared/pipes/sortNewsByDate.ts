import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../../news/news.model';

@Pipe({
    name: 'sortNewsByDate'
})

export class SortNewsByDatePipe implements PipeTransform {
    transform(items: News[], sortBy?: Date) {
        return items.sort(
                    (x, y) => {
                        let a = +new Date(x.postDate);
                        let b = +new Date(y.postDate);
                        return b - a;
                    }
        );
    }
}
