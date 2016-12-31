import { Component } from '@angular/core';

import { PageComponent } from '../../shared/page.component';
import { News } from '../../news/news.model';
import { NewsService } from '../services/news-services';

@Component({
  moduleId: module.id,
  selector: 'news',
  templateUrl: './news.component.html',
   styleUrls: ['./news.component.css']
})

export class NewsComponent implements PageComponent {
  newsList: News[] = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getAllNews()
                       .subscribe(news => this.newsList = news);
  }
}
