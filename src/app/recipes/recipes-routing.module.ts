import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { NewEditRecipeComponent } from './new-edit-recipe/new-edit-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from '../auth/auth-guard.service';

const recipesRoute = [
    {
        path: '', component: RecipesComponent, children: [
            { path: '', component: RecipesStartComponent },
            { path: 'new', component: NewEditRecipeComponent, canActivate: [AuthGuard] },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: NewEditRecipeComponent, canActivate: [AuthGuard] },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(recipesRoute)],

    exports: [RouterModule]
})
export class RecipesRouting { }