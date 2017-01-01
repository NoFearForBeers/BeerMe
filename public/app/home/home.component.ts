import { Component } from '@angular/core';
import { News } from '../news/news.model';
import { NewsService } from '../news/services/news-services';

@Component({
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent {
    newsList: News[] = [];
    myInterval: number = 5000;
    noWrapSlides: boolean = false;
    slides: any[] = [];

  constructor(private newsService: NewsService) {
    this.addSlide();
  }

  ngOnInit() {
    this.newsService.getAllNews()
                       .subscribe(news => this.newsList = news);
  }

  addSlide(): void {
    this.slides.push({
      image: `https://flggcanyonaletrail.files.wordpress.com/2014/04/savdist-com.jpg`
    });

     this.slides.push({
      image: `http://www.dwordroblin.pl/wp-content/uploads/2016/08/Hop-and-beer-in-glass.jpg`
    });

     this.slides.push({
      image: `http://epicureandculture.com/wp-content/uploads/2015/06/Eco-friendly-breweries-cover-photo-e1435500655842.jpg`
    });
  }
}
