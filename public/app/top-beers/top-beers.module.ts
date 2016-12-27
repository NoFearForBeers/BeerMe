import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TopBeersComponent } from './top-beers.component';
import { TopBeersDetailsComponent } from './top-beers-details/top-beers-details.component';
import { TopBeersService } from './top-beers.service';

@NgModule({
    imports: [ CommonModule, FormsModule, RouterModule ],
    exports: [ TopBeersComponent, TopBeersDetailsComponent ],
    declarations: [ TopBeersComponent, TopBeersDetailsComponent ],
    providers: [ TopBeersService ]
})
export class TopBeersModule {
}