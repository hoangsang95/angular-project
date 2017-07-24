import { Ingredients } from './../shared/ingredients.model';
export class Recipes{
	constructor(
		public name: string,
		public description: string,
		public imagePath:string,
		public ingredients: Ingredients[],
	){}
}