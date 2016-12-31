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
    myInterval: number = 3000;
    noWrapSlides: boolean = false;
    slides: any[] = [];
    activeSlideIndex: number;

  constructor(private newsService: NewsService) {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  ngOnInit() {
    this.newsService.getAllNews()
                       .subscribe(news => this.newsList = news);
  }

  addSlide(): void {
    let newWidth = 600 + this.slides.length + 1;

    this.slides.push({
      image: `http://www.tastings.com/images/beer-freshness.jpg`
    });

     this.slides.push({
      image: `https://www.breakside.com/wp-content/uploads/2016/01/ERB_Brewery7.jpg`
    });

     this.slides.push({
      image: `http://d14dsi4x2zx6ql.cloudfront.net/sites/default/files/styles/welcome_image/public/VCW_SI_T8_RussianRiverBrewery_george%20ruiz_Flickr_1280x642.jpg`
    });
  }

  selectSlide(index: number): void {
    this.activeSlideIndex = index;
  }

  removeSlide(index?: number):void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }
}
