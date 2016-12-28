import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NewsComponent } from './news-list/news.component';
import { NewsService } from './services/news-services';

@NgModule({
    imports: [ CommonModule, FormsModule, RouterModule ],
    exports: [ NewsComponent ],
    declarations: [ NewsComponent ],
    providers: [ NewsService ]
})

export class NewsModule {
}
