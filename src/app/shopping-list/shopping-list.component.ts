import { Subscription } from 'rxjs/Subscription';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css'],
	
})
export class ShoppingListComponent implements OnInit, OnDestroy {
	ingredients: Ingredients[] ;
	subscription: Subscription;

	constructor(private slService: ShoppingListService) { }

	ngOnInit() {
		this.ingredients = this.slService.getIngredients();
		this.subscription = this.slService.ingredientsChange.subscribe(
			(ingredients: Ingredients[]) => {
				this.ingredients = ingredients;
			}
		);
	}

	ingredientSelected(index: number){
		this.slService.ingredientSelected.next(index);
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}

}
