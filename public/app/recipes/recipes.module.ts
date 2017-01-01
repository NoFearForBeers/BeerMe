import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { UnapprovedRecipesComponent } from './unapproved-recipes/unapproved-recipes.component';
//import { } from './approve-recipe-details';
import { RecipeService } from './services/recipe.service';

import { ToastrService } from 'toastr-ng2';

@NgModule({
    imports: [ CommonModule, FormsModule, RouterModule ],
    exports: [ AddRecipeComponent, UnapprovedRecipesComponent ],
    declarations: [ AddRecipeComponent, UnapprovedRecipesComponent ],
    providers: [ RecipeService, ToastrService ]
})
export class RecipesModule {
}
