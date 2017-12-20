import { RecipesService } from './recipes.service';
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, CanActivate } from '@angular/router';
import { IRecipe } from './recipe';
import { Recipes } from './recipe.data';

@Component({
  //moduleId: module.id,
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
  pageTitle: string = "Recipes";
  filter: string = "all";
  errorMessage: string;
  isSelected: boolean;

  @Output() fromRecipes = new EventEmitter<string>();
  recipes: IRecipe[];

  constructor(private route: ActivatedRoute, private router: Router,
  private service: RecipesService) { 
    this.recipes = service.getRecipes();
  }


  ngOnInit() {
    this.route.paramMap.subscribe(
      params => this.filter = params.get('filter')
    );
    //comes from route data
    this.pageTitle = this.route.data['value'].pageTitle;
    //this comes from the recipe.data.ts file
    //this.recipes = Recipes.MyRecipes;
    
  }

  setFilter($event) {
    console.log($event.target.text);
    this.filter = $event.target.text;
    this.isSelected = !this.isSelected;
    // $event.target.classList.toggle('selected'); 
    //target.classList.add('selected'); 
    
  }
}
