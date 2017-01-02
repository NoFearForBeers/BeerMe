import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BeerHistoryComponent } from './beer-history/beer-history.component';
import { BeerIngredientsComponent } from './beer-ingredients/beer-ingredients.component';
import { BeerTastingComponent } from './beer-tasting/beer-tasting.component';
import { BeerTypesComponent } from './beer-types/beer-types.component';
import { BeerTypesService } from './beer-types/beer-types.service';
import { BeerBrandsComponent } from './beer-brands/beer-brands.component';
import { BeerBrandsService } from './beer-brands/beer-brands.service';
import { UppercaseDirective } from '../shared/directives/uppercase.directive';


@NgModule({
    imports: [ CommonModule, FormsModule ],
    exports: [ BeerHistoryComponent, BeerIngredientsComponent, BeerTastingComponent, BeerTypesComponent, BeerBrandsComponent ],
    declarations: [
        BeerHistoryComponent,
        BeerIngredientsComponent,
        BeerTastingComponent,
        BeerTypesComponent,
        BeerBrandsComponent,
        UppercaseDirective
    ],
    providers: [BeerTypesService, BeerBrandsService]
})
export class BeerFactsModule {
}
