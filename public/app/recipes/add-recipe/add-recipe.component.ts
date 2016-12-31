import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'toastr-ng2';

import { Recipe } from '../recipe.model';

@Component({
    moduleId: module.id,
    templateUrl: './add-recipe.component.html'
    //styleUrls: ['./register.component.css']
})
export class AddRecipeComponent {
    newRecipe = {
        name: '',
        ingredients: [],
        ingredientsCombined: '',
        methodOfPreparation: '',
        imgUrl: '',
        author: '',
        status: ''
    };

    //ingredientsCombined: string;

    constructor(private router: Router,
                private toastrService: ToastrService) { }

    onSubmit() {
        this.newRecipe.ingredients = this.newRecipe.ingredientsCombined.split(',');

        let temp = [];
        for(let ingredient of this.newRecipe.ingredients) {
            if(ingredient != '' && ingredient != ' ') {
                ingredient && temp.push(ingredient);
            } // copy each non-empty value to the 'temp' array
        }

        this.newRecipe.ingredients = temp;

        console.log(this.newRecipe.ingredients);
        // this.authService.register(this.newUser)
        //     .subscribe(
        //         data => {
        //             this.router.navigate(['login']);
        //             this.showSuccess(`${data.username} successfuly registered!`);
        //     },
        //     error => {
        //             this.showError(error);
        //     });
    }

    showSuccess(message: string) {
        this.toastrService.success(message, 'Successs!');
    }

    showError(message: string) {
        this.toastrService.error(message, 'Error!');
    }
}
