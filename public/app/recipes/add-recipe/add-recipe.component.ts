import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'toastr-ng2';

import { PageComponent } from '../../shared/page.component';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';
import { AuthService } from '../../authentication/services/auth.service';

@Component({
    moduleId: module.id,
    templateUrl: './add-recipe.component.html'
    //styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements PageComponent {
    newRecipe: Recipe = {
        name: '',
        ingredients: [],
        methodOfPreparation: '',
        imgUrl: '',
        author: '',
        status: ''
    };

    ingredientsCombined: string = '';

    constructor(private router: Router,
                private recipeService: RecipeService,
                private authService: AuthService,
                private toastrService: ToastrService) { }

    ngOnInit() {
        this.authService.getUsername()
                        .then(username => this.newRecipe.author = username);
    }

    onSubmit() {
        //process ingredients
        this.newRecipe.ingredients = this.ingredientsCombined.split(',');

        let temp = [];
        for(let ingredient of this.newRecipe.ingredients) {
            if(ingredient != '' && ingredient != ' ') {
                ingredient && temp.push(ingredient);
            } // copy each non-empty value to the 'temp' array
        }

        this.newRecipe.ingredients = temp;

        console.log(this.newRecipe.ingredients);

        let newRecipeStatus = 'waiting-for-approval';

        this.newRecipe.status = newRecipeStatus;

        
        this.recipeService.addRecipe(this.newRecipe)
            .subscribe(
                data => {
                    this.router.navigate(['home']);
                    this.showSuccess(`Рецепта за ${data.name} бе изпратена за одобрение!`);
            },
            error => {
                    this.showError(error);
            });
    }

    showSuccess(message: string) {
        this.toastrService.success(message, 'Successs!');
    }

    showError(message: string) {
        this.toastrService.error(message, 'Error!');
    }
}
