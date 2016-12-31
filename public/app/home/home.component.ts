import { Component } from '@angular/core';
import { News } from '../news/news.model';
import { NewsService } from '../news/services/news-services';

@Component({
    moduleId: module.id,
    templateUrl: './home.component.html'
})

export class HomeComponent {
    newsList: News[] = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getAllNews()
                       .subscribe(news => this.newsList = news);
  }
}
