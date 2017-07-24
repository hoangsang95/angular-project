import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
	private subcription: Subscription;
	@ViewChild('f') slForm: NgForm;
	editMode = false;
	editItem: Ingredients;
	indexEdit: number;

	addIngredient(form: NgForm){
		const value = form.value;
		const newIngredient = new Ingredients(value.name,value.amount);
		this.slService.addIngredient(newIngredient);
		

	}
	constructor(private slService: ShoppingListService) { }

	ngOnInit() {
		this.subcription= this.slService.ingredientSelected.subscribe(
			(index: number) => {
				console.log(index);
				this.editMode = true;
				this.indexEdit = index;
				this.editItem = this.slService.getIngredient(index);
				this.slForm.setValue({
					name: this.editItem.name,
					amount: this.editItem.amount
				});
			}
		);
	}

	onUpdate(){
		const index = this.indexEdit;
		const value = this.slForm.value;
		if(this.editMode){
			this.slService.updateIngredient(index,value);
			this.editMode = false;
		}
		else{
			this.slService.addIngredient(value);
		}
		this.slForm.reset();
	}

	onDelete(){
		this.slService.deleteIngredient(this.indexEdit);
		this.onClear();
	}

	onClear(){
		this.editMode = false;
		this.slForm.reset();
	}

	ngOnDestroy(){
		this.subcription.unsubscribe();
	}

}
