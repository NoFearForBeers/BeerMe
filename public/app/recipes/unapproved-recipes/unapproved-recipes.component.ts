import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PageComponent } from '../../shared/page.component';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';
import { AuthService } from '../../authentication/services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'unapproved-recipes',
  templateUrl: './unapproved-recipes.component.html',
  styleUrls: ['./unapproved-recipes.component.css']
})

export class UnapprovedRecipesComponent implements PageComponent {
  recipeList: Recipe[] = [];

  constructor(private recipeService: RecipeService, private authService: AuthService) {
  }

  ngOnInit() {
    this.recipeService.getAllUnapprovedRecipes()
                       .subscribe(recipes => this.recipeList = recipes);
  }
}
