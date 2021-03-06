import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NewsComponent } from './news-list/news.component';
import { NewsService } from './services/news-services';
import { NewsDetailsComponent } from './news-details/news-details.component';

import { SortNewsByDatePipe } from '../shared/pipes/sortNewsByDate';
import { CutTextPipe } from '../shared/pipes/cutText';

@NgModule({
    imports: [ CommonModule, FormsModule, RouterModule ],
    exports: [ NewsComponent, NewsDetailsComponent ],
    declarations: [ NewsComponent, NewsDetailsComponent, SortNewsByDatePipe, CutTextPipe ],
    providers: [ NewsService ]
})

export class NewsModule {
}
