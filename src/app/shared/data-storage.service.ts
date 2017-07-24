import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipes } from '../recipes/recipes.model';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(
        private http: Http,
        private recipeService: RecipeService,
        private authService: AuthService
    ) { }

    storeRecipes() {
      const token = this.authService.getToken();
      const headers = new Headers({ 'Content-Type': 'application/json' });
      return  this.http.put(
            'https://angular-project-ecd34.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes(),
            { headers });
    }

    getRecipes(){
        const token = this.authService.getToken();

        return this.http.get('https://angular-project-ecd34.firebaseio.com/recipes.json?auth=' + token)
        .map((response: Response) => {
            const recipes: Recipes[] = response.json();
            for(const recipe of recipes){
                if(!recipe['ingredients'])
                    recipe['ingredient'] = [];
            }
            return recipes;
        })
        .subscribe(
            ( recipes: Recipes[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}