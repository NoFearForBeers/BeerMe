import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { Recipe } from '../recipe.model';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class RecipeService {

    constructor(private http: Http, private router: Router) {
    }

    addRecipe(recipeInfo: Recipe): Observable<Recipe> {
        let url = '/api/add-recipe';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = { body: JSON.stringify(recipeInfo) };

        return this.http.post(url, body, headers)
            .map((r: Response) => r.json().data as Recipe);
    }
}