import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeService } from './services/recipe.service';

import { ToastrService } from 'toastr-ng2';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    exports: [ AddRecipeComponent ],
    declarations: [ AddRecipeComponent ],
    providers: [ RecipeService, ToastrService ]
})
export class RecipesModule {
}
