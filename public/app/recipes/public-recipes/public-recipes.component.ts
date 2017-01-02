import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PageComponent } from '../../shared/page.component';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  moduleId: module.id,
  selector: 'public-recipes',
  templateUrl: './public-recipes.component.html',
  styleUrls: ['./public-recipes.component.css']
})

export class PublicRecipesComponent implements PageComponent {
  recipeList: Recipe[] = [];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.getAllPublicRecipes()
                       .subscribe(recipes => this.recipeList = recipes);
  }
}
