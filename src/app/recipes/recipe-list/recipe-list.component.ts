import {Recipe} from '../recipe.model';
import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
    this.recipes = recipeService.getRecipes();
  }

  ngOnInit() {
  }

  onCreateRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
