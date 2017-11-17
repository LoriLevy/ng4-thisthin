import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, CanActivate } from '@angular/router';
import { IRecipe } from './recipe';
//import { RecipeService } from './recipe.service';
import { Recipes } from './recipe.data';

@Component({
  //moduleId: module.id,
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
  pageTitle: string = "Meals";
  filter: string = "all";
  errorMessage: string;

  @Output() fromRecipes = new EventEmitter<string>();
  recipes: IRecipe[];
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => this.filter = params.get('filter')
    );
    //comes from route data
    this.pageTitle = this.route.data['value'].pageTitle;
    this.recipes = Recipes.MyRecipes;
    //console.log(Recipes);
    //this._recipeService.getProfile()
    //  .subscribe(recipes => this.recipes = recipes,
    //             error => this.errorMessage = <any>error);
    //this.recipes =  this._recipeService.getProfile(); //getProfile //getRecipes
  }

  setFilter($event) {
    console.log($event.target.text);
    this.filter = $event.target.text;
  }
  
  
  
}
