import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BeerHistoryComponent } from './beer-history/beer-history.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    exports: [ BeerHistoryComponent ],
    declarations: [ BeerHistoryComponent ],
    providers: []
})
export class BeerFactsModule {
}
