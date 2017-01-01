import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { PageComponent } from '../../shared/page.component';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
    moduleId: module.id,
    selector: 'unapproved-recipes-details',
    templateUrl: './unapproved-recipes-details.component.html'
})
export class UnapprovedRecipesDetailsComponent implements PageComponent {
    recipe: Recipe;

    constructor(
        private recipeService: RecipeService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        //console.log(this.route.params);
        this.route.params
            .switchMap((params: Params) => this.recipeService.getRecipeById(params['id']))
            .subscribe(recipe => this.recipe = recipe);
    }
}