import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../../news/news.model';

@Pipe({
    name: 'takeRecentNews'
})

export class TakeRecentNewsPipe implements PipeTransform {
    transform(items: News[], sortBy?: Date) {
        items.sort(
                    (x, y) => {
                        let a = +new Date(x.postDate);
                        let b = +new Date(y.postDate);
                        return b - a;
                    }
        );

        return items.slice(0, 3);
    }
}
