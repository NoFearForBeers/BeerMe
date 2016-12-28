import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BeerHistoryComponent } from './beer-history/beer-history.component';
import { BeerIngredientsComponent } from './beer-ingredients/beer-ingredients.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    exports: [ BeerHistoryComponent, BeerIngredientsComponent ],
    declarations: [ BeerHistoryComponent, BeerIngredientsComponent ],
    providers: []
})
export class BeerFactsModule {
}
