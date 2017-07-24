import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesRouting } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { NewEditRecipeComponent } from './new-edit-recipe/new-edit-recipe.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { DropdownModule } from '../shared/dropdowm.module';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipesStartComponent,
        NewEditRecipeComponent,
    ],

    imports: [CommonModule, ReactiveFormsModule, RecipesRouting, DropdownModule]
})
export class RecipesModule {}