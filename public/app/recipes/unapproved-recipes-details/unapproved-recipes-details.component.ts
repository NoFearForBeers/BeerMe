import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ToastrService } from 'toastr-ng2';
import 'rxjs/add/operator/switchMap';

import { PageComponent } from '../../shared/page.component';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
    moduleId: module.id,
    selector: 'unapproved-recipes-details',
    templateUrl: './unapproved-recipes-details.component.html',
    styleUrls: ['./unapproved-recipes-details.component.css']
})
export class UnapprovedRecipesDetailsComponent implements PageComponent {
    recipe: Recipe;
    rejectMessage: string = '';

    constructor(
        private recipeService: RecipeService,
        private router: Router,
        private route: ActivatedRoute,
        private toastrService: ToastrService
    ) { }

    ngOnInit() {
        //console.log(this.route.params);
        this.route.params
            .switchMap((params: Params) => this.recipeService.getRecipeById(params['id']))
            .subscribe(recipe => this.recipe = recipe);
    }

    inputMessage() {
        let buttons = document.getElementById('button-group');
        buttons.className += 'hidden';
        let messageContainer = document.getElementById('video-add-note');
        messageContainer.className += 'visible';
    }

    rejectRecipe() {
        let rejectedStatus = 'rejected';
        this.recipe.status = rejectedStatus;
        this.recipe.rejectMessage = this.rejectMessage;

        this.recipeService.changeRecipeStatus(this.recipe)
            .subscribe(
                data => {
                    this.router.navigate(['unapproved-recipes']);
                    this.showSuccess(`Рецепта за ${data.name} бе отвърлена!`);
            },
            error => {
                    this.showError(error);
            });
    }

    approveRecipe() {
        let approvedStatus = 'approved';
        this.recipe.status = approvedStatus;

        this.recipeService.changeRecipeStatus(this.recipe)
            .subscribe(
                data => {
                    this.router.navigate(['unapproved-recipes']);
                    this.showSuccess(`Рецепта за ${data.name} бе одобрена!`);
            },
            error => {
                    this.showError(error);
            });
    }

    cencel() {
        let messageContainer = document.getElementById('video-add-note');
        messageContainer.className = 'transparent-holder'; //remove visible class
        let buttons = document.getElementById('button-group');
         buttons.className = '';
    }

    showSuccess(message: string) {
        this.toastrService.success(message, 'Successs!');
    }

    showError(message: string) {
        this.toastrService.error(message, 'Error!');
    }
}