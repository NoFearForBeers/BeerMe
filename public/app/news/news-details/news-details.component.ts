import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { PageComponent } from '../../shared/page.component';
import { News } from '../news.model.js';
import { NewsService } from '../services/news-services.js';

@Component({
    moduleId: module.id,
    selector: 'news-details',
    templateUrl: './news-details.component.html',
    styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements PageComponent {
    news: News;

    constructor(
        private newsService: NewsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.newsService.getNewsById(params['id']))
            .subscribe(newsResult => this.news = newsResult);
    }
}
