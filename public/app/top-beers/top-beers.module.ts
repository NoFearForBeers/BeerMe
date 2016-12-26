import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TopBeersComponent } from './top-beers.component';
import { TopBeersService } from './top-beers.service';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    exports: [ TopBeersComponent ],
    declarations: [ TopBeersComponent ],
    providers: [ TopBeersService ]
})
export class TopBeersModule {
}