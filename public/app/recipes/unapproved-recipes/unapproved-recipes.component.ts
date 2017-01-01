import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PageComponent } from '../../shared/page.component';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  moduleId: module.id,
  selector: 'unapproved-recipes',
  templateUrl: './unapproved-recipes.component.html'
//   styleUrls: ['./app.component.css']
})

export class UnapprovedRecipesComponent implements PageComponent {
  recipeList: Recipe[] = [];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.getAllUnapprovedRecipes()
                       .subscribe(recipes => this.recipeList = recipes);
  }
}
