import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe1', 'this is simple a test1', 'http://127.0.0.1:8080/1.png'),
    new Recipe('A test recipe2', 'this is simple a test2', 'http://127.0.0.1:8080/2.png'),
    new Recipe('A test recipe3', 'this is simple a test3', 'http://127.0.0.1:8080/3.png'),
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
    console.log(recipe);
  }
}
