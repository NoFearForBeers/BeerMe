import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddRecipeComponent } from './add-recipe/add-recipe.component';

import { ToastrService } from 'toastr-ng2';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    exports: [ AddRecipeComponent ],
    declarations: [ AddRecipeComponent ],
    providers: [ ToastrService ]
})
export class RecipesModule {
}
