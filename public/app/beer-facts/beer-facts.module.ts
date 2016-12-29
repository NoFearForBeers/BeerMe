import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BeerHistoryComponent } from './beer-history/beer-history.component';
import { BeerIngredientsComponent } from './beer-ingredients/beer-ingredients.component';
import { BeerTastingComponent } from './beer-tasting/beer-tasting.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    exports: [ BeerHistoryComponent, BeerIngredientsComponent, BeerTastingComponent ],
    declarations: [ BeerHistoryComponent, BeerIngredientsComponent,BeerTastingComponent ],
    providers: []
})
export class BeerFactsModule {
}
