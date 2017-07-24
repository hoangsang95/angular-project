import { Subject } from 'rxjs/Subject';
import { Ingredients } from './../shared/ingredients.model';
import { Injectable } from '@angular/core';
import { Recipes } from './recipes.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChange = new Subject<Recipes[]>();
    private recipes: Recipes[] = [
        new Recipes(
            'Recipe 1', 
            'Recipe 1',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new Ingredients('Tomatoe', 2),
                new Ingredients('Banana', 5),
            ]
        ),
        new Recipes(
            'Recipe 2', 
            'Recipe 2',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredients('Onion', 1),
                new Ingredients('Durian', 3),
            ]
        ),
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    setRecipes(recipes: Recipes[]){
        this.recipes = recipes;
          this.recipesChange.next(this.recipes.slice());
    }

    addIngredientToShopping(ingredients: Ingredients[]){
      this.slService.addIngrediens(ingredients);
	}

    addRecipe(recipe: Recipes){
        this.recipes.push(recipe);
        this.recipesChange.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipes){
        this.recipes[index] = recipe;
        this.recipesChange.next(this.recipes.slice());
    }

    deleteRecipe(index){
        this.recipes.splice(index,1);
        this.recipesChange.next(this.recipes.slice());
    }
   

    
}