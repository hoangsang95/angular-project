import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { RecipeService } from '../recipe.service';
import { Recipes } from '../recipes.model';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
	recipe: Recipes;
	id: number;
	constructor(
		private recipeService: RecipeService, 
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit() {
		this.route.params.subscribe(
			(params: Params) => {
				this.id = +params['id'];
				this.recipe =this.recipeService.getRecipe(this.id);
			}
		);
	}

	addToShopping(ingredients: Ingredients[]){
		this.recipeService.addIngredientToShopping(ingredients);
	}

	editRecipe(){
		this.router.navigate(['edit'], {relativeTo: this.route});
	}

	deleteRecipe(){
		if(confirm('Are you delete this Recipe?'))
		{
			this.recipeService.deleteRecipe(this.id);
			this.router.navigate(['/recipes']);
		}
		
	}

}
