import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ToastrService } from 'toastr-ng2';
import 'rxjs/add/operator/switchMap';

import { PageComponent } from '../../shared/page.component';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
    moduleId: module.id,
    selector: 'public-recipes-details',
    templateUrl: './public-recipes-details.component.html',
    styleUrls: ['./public-recipes-details.component.css']
})
export class PublicRecipesDetailsComponent implements PageComponent {
    recipe: Recipe;

    constructor(
        private recipeService: RecipeService,
        private router: Router,
        private route: ActivatedRoute,
        private toastrService: ToastrService
    ) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.recipeService.getRecipeById(params['id']))
            .subscribe(recipe => this.recipe = recipe);
    }

    showSuccess(message: string) {
        this.toastrService.success(message, 'Successs!');
    }

    showError(message: string) {
        this.toastrService.error(message, 'Error!');
    }
}