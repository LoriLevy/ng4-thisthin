import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html'

})

export class RecipeComponent implements OnInit {
  @Input() recipeImage: string;
  @Input() recipeName: string;
  @Input() recipeDescription: string;
  @Input() recipePdf: string;

  constructor() { }

  ngOnInit() {
  }

  // recipes = [
  //   {
  //     "recipeId": 1,
  //     "recipeName": "Stuffed Portobellos",
  //     "description": "Stuffed Portobellos are hearty, and can be a meal unto themselves. Make them as a side dish or for a satisfying low-fat dinner.",
  //     "categoryFilter": "dinner side-dish",
  //     "starRating": 3.2,
  //     "imageUrl": "./images/pb1.png",
  //     "pdfUrl": "./pdfs/Stuffed.Portobellos.pdf"
  //   },
  //   {
  //     "recipeId": 2,
  //     "recipeName": "Grilled Salmon and Vegetables",
  //     "description": "There is nothing quite like Grilled Salmon and Vegetables. We catch a lot of salmon on the Columbia River, and I tell you that boat we got last year has really paid off. When you catch a big salmon and filet it, it will keeo in the freezer up to 10 months if you pack with a seal-a-meal. If you can't get fresh-caught salmon, farmed salmon sold in grocery stores can be really good. The key to this recipe, is don't overcook the salmon. Take off before you think it's done, because it keeps on cooking until it cools down.",
  //     "categoryFilter": "dinner",
  //     "starRating": 5.0,
  //     "imageUrl": "./images/grilled-salmon-veggies.jpg",
  //     "pdfUrl": "./pdfs/Grilled.Salmon.and.Veggies.pdf"
  //   }
  // ]
}
