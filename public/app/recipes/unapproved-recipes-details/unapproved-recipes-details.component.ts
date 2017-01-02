import { Component, OnInit,    
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ToastrService } from 'toastr-ng2';
import 'rxjs/add/operator/switchMap';

import { PageComponent } from '../../shared/page.component';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';
import { AuthService } from '../../authentication/services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'unapproved-recipes-details',
    templateUrl: './unapproved-recipes-details.component.html',
    styleUrls: ['./unapproved-recipes-details.component.css'],

    animations: [
        trigger('flyInOut', [
            state('in', style({opacity: 1, transform: 'scale(1.0)'})),
            state('out', style({opacity: 0, transform: 'scale(0.0)'})),
            transition('in => out', animate('300ms')),
            transition('out => in', animate('600ms'))
        ])
    ]
})
export class UnapprovedRecipesDetailsComponent implements PageComponent {
    recipe: Recipe;
    rejectMessage: string = '';

    state: string = 'out';

    constructor(
        private recipeService: RecipeService,
        private authService: AuthService,
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
        this.state = (this.state === 'out' ? 'in' : 'out');
        //console.log(this.state);

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
        this.state = (this.state === 'out' ? 'in' : 'out');
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