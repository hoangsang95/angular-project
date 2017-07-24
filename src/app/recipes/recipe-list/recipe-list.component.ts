import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Recipes } from '../recipes.model';
import { RecipeService } from '../recipe.service';


@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit, OnDestroy {
	recipes: Recipes[] = [];
	subscription: Subscription;

	constructor(
		private recipesService: RecipeService,
		private router: Router,
		private route: ActivatedRoute,
	) {}

	ngOnInit() {
		this.recipes = this.recipesService.getRecipes();
		this.subscription =this.recipesService.recipesChange.subscribe(
			(recipes: Recipes[]) => {
				this.recipes = recipes
			}
		);
	}

	newRecipe(){
		this.router.navigate(['new'], {relativeTo: this.route});
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
}
