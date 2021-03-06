import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { PublicRecipesComponent } from './public-recipes/public-recipes.component';
import { PublicRecipesDetailsComponent } from './public-recipes-details/public-recipes-details.component';
import { UnapprovedRecipesComponent } from './unapproved-recipes/unapproved-recipes.component';
import { UnapprovedRecipesDetailsComponent } from './unapproved-recipes-details/unapproved-recipes-details.component';
import { RecipeService } from './services/recipe.service';

import { ToastrService } from 'toastr-ng2';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [
        AddRecipeComponent,
        PublicRecipesComponent,
        PublicRecipesDetailsComponent,
        UnapprovedRecipesComponent,
        UnapprovedRecipesDetailsComponent
    ],
    declarations: [
        AddRecipeComponent,
        PublicRecipesComponent,
        PublicRecipesDetailsComponent,
        UnapprovedRecipesComponent,
        UnapprovedRecipesDetailsComponent
    ],
    providers: [RecipeService, ToastrService]
})
export class RecipesModule {
}
