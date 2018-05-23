import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test recipe1', 'this is simple a test1', 'http://127.0.0.1:8080/1.png', [
      new Ingredient('Meat1', 2),
      new Ingredient('Bread1', 1),
    ]),
    new Recipe('A test recipe2', 'this is simple a test2', 'http://127.0.0.1:8080/2.png', [
      new Ingredient('Meat2', 2),
      new Ingredient('Bread2', 1),
    ]),
    new Recipe('A test recipe3', 'this is simple a test3', 'http://127.0.0.1:8080/3.png', [
      new Ingredient('Meat3', 2),
      new Ingredient('Bread3', 1),
    ]),
  ];

  constructor(private slService: ShoppingListService) {
  }

  public getRecipes() {
    return this.recipes.slice();
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
