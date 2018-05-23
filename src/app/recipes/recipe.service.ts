import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test recipe1', 'this is simple a test1', 'http://127.0.0.1:8080/1.png'),
    new Recipe('A test recipe2', 'this is simple a test2', 'http://127.0.0.1:8080/2.png'),
    new Recipe('A test recipe3', 'this is simple a test3', 'http://127.0.0.1:8080/3.png'),
  ];

  public getRecipes() {
    return this.recipes.slice();
  }

}
