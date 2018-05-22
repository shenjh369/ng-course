import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simple a test', 'http://127.0.0.1:8080/1.png'),
    new Recipe('A test recipe', 'this is simple a test', 'http://127.0.0.1:8080/2.png'),
    new Recipe('A test recipe', 'this is simple a test', 'http://127.0.0.1:8080/3.png'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
