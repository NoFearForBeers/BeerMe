import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ToastrService } from 'toastr-ng2';
import 'rxjs/add/operator/switchMap';

import { PageComponent } from '../../shared/page.component';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';
import { AuthService } from '../../authentication/services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'public-recipes-details',
    templateUrl: './public-recipes-details.component.html',
    styleUrls: ['./public-recipes-details.component.css']
})
export class PublicRecipesDetailsComponent implements PageComponent {
    recipe: Recipe;
    commentText: string;
    newComment: any = {
        username: '',
        text: '',
        date: ''
    }

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private recipeService: RecipeService,
        private authService: AuthService,
        private toastrService: ToastrService
    ) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.recipeService.getRecipeById(params['id']))
            .subscribe(recipe => this.recipe = recipe);

        this.authService.getUsername()
            .then(username => this.newComment.username = username);
    }

    addComment() {
        this.newComment.date = new Date()

        let recipeInfo = this.recipe;
        recipeInfo.comments.push(this.newComment);

        this.recipeService.addCommentToRecipe(recipeInfo)
            .subscribe(
            data => {
                //this.newComment.text = '';
            },
            error => {
                let responseBody = error._body;
                let responseObj = JSON.parse(responseBody);
                this.showError(responseObj.msg);
            });
    }

    showSuccess(message: string) {
        this.toastrService.success(message, 'Успех!');
    }

    showError(message: string) {
        this.toastrService.error(message, 'Грешка!');
    }
}