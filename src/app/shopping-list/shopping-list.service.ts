import { Subject } from 'rxjs/Subject';
import { EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

export class ShoppingListService {
    ingredientsChange = new Subject<Ingredients[]>();
    ingredientSelected = new Subject<number>();
    private ingredients: Ingredients[] = [
        new Ingredients('Apples', 5),
        new Ingredients('Tomatoes', 10),
    ];

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredients) {
        this.ingredients.unshift(ingredient);
        this.ingredientsChange.next(this.ingredients.slice());
    }

    addIngrediens(ingredients: Ingredients[]){
       this.ingredients.unshift(...ingredients);
    }
    
    deleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientsChange.next(this.ingredients.slice());
    }

    updateIngredient(index: number, value: Ingredients){
        this.ingredients[index].name = value.name;
        this.ingredients[index].amount = value.amount;
        
    }
}