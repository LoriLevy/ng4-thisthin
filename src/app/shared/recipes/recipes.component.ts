import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, CanActivate } from '@angular/router';
import { IRecipe } from './recipe';
import { RecipeService } from './recipe.service';

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

  constructor(private route: ActivatedRoute, private router: Router, 
              private _recipeService: RecipeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => this.filter = params.get('filter')
    );
    //comes from route data
    this.pageTitle = this.route.data['value'].pageTitle;
    // this._recipeService.getRecipes()
    //  .subscribe(recipes => this.recipes = recipes,
    //             error => this.errorMessage = <any>error);
    this.recipes =  this._recipeService.getRecipes();
  }

  setFilter($event) {
    console.log($event.target.text);
    this.filter = $event.target.text;
  }
  recipes: IRecipe[];
  
  // recipes: IRecipe[] = [
  //   {
  //     "recipeId": 1,
  //     "recipeName": "Stuffed Portobellos",
  //     "description": "Stuffed Portobellos are hearty, and can be a meal unto themselves. Make them as a side dish or for a satisfying low-fat dinner.",
  //     "categoryFilter": "dinner sides",
  //     "starRating": 3.2,
  //     "imageUrl": "assets/images/recipes/stuffed.portobellos.png",
  //     "pdfUrl": "assets/pdfs/Stuffed.Portobellos.pdf"

  //   },
  //   {
  //     "recipeId": 2,
  //     "recipeName": "Grilled Salmon and Vegetables",
  //     "description": "The key to this recipes is don't overcook the salmon. It continues to cook while it's cooling down.",
  //     "categoryFilter": "dinner",
  //     "starRating": 5.0,
  //     "imageUrl": "assets/images/recipes/salmon.veggies.jpg",
  //     "pdfUrl": "assets/pdfs/Grilled.Salmon.and.Veggies.pdf"
  //   },
  //   {
  //     "recipeId": 3,
  //     "recipeName": "Super Extra Low-Fat Cranberry Cookies",
  //     "description": "Grind cereal and graham crackers in a food processor crumbs make your own butter out of prunes. Nobody ever believes they are low-fat!",
  //     "categoryFilter": "dessert",
  //     "starRating": 4.8,
  //     "imageUrl": "assets/images/recipes/self-cookies.jpg",
  //     "pdfUrl": "assets/pdfs/Self.Cookies.pdf"
  //   },
  //   {
  //     "recipeId": 4,
  //     "recipeName": "Baked Yam Chips",
  //     "description": "Although it takes time to make these chips, it's worth it! Make alot because they go really fast! But remember, for you, everything in moderation.",
  //     "categoryFilter": "sides",
  //     "starRating": 4.8,
  //     "imageUrl": "assets/images/recipes/baked-yam-chips.jpg",
  //     "pdfUrl": "assets/pdfs/Baked.Yam.Chips.pdf"
  //   },
  //   {
  //     "recipeId": 5,
  //     "recipeName": "Chicken Sandwich with Fruit",
  //     "description": "Great lunch or late afternoon snack. Quick to make; easy take to work. Get your knife!",
  //     "categoryFilter": "lunch",
  //     "starRating": 3.8,
  //     "imageUrl": "assets/images/recipes/chicken-sandwich-fruit.png",
  //     "pdfUrl": "assets/pdfs/Chicken.Sandwich.With.Fruit.pdf"
  //   },
  //   {
  //     "recipeId": 6,
  //     "recipeName": "Cranberry Snap Brownies",
  //     "description": "These rich and gooey bar cookies aren't really brownies! I modified a 123 Snap Brownie recipe, replacing all the high-fat ingredients with low-fat or fat-free ingredients. So Good!",
  //     "categoryFilter": "dessert",
  //     "starRating": 4.0,
  //     "imageUrl": "assets/images/recipes/cranberry-snap-brownies.png",
  //     "pdfUrl": "assets/pdfs/Cranberry.Snap.Brownies.pdf"
  //   },
  //   {
  //     "recipeId": 9,
  //     "recipeName": "Fruit Sundae",
  //     "description": "Feel like celebrating! Guilt-free (aka Fat Free!)but use a small bowl. The bowl you see here is just 5 inches in diameter, so smaller than a cereal or pasta bowl.",
  //     "categoryFilter": "lunch dessert",
  //     "starRating": 4.0,
  //     "imageUrl": "assets/images/recipes/fruit-sundae.png",
  //     "pdfUrl": "assets/pdfs/Fruit-Sundae.pdf"
  //   },
  //   {
  //     "recipeId": 13,
  //     "recipeName": "Spinach and Egg White Omlette Burrito",
  //     "description": "Great way to start the day! Look for the Canteca Flour Tortillas, as they are almost fat-free.",
  //     "categoryFilter": "breakfast",
  //     "starRating": 4.0,
  //     "imageUrl": "assets/images/recipes/breakfast-burrito.jpg",
  //     "pdfUrl": "assets/pdfs/Spinach.EggWhite.Burrito.pdf"
  //   }
  // ]
}
