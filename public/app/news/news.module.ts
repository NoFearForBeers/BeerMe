import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NewsComponent } from './news-list/news.component';
import { NewsService } from './services/news-services';
import { NewsDetailsComponent } from './news-details/news-details.component';

@NgModule({
    imports: [ CommonModule, FormsModule, RouterModule ],
    exports: [ NewsComponent, NewsDetailsComponent ],
    declarations: [ NewsComponent, NewsDetailsComponent ],
    providers: [ NewsService ]
})

export class NewsModule {
}
