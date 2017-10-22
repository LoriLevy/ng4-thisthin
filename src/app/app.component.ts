import { Component } from '@angular/core';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './shared/title/title.component';
import { RecipeComponent } from './shared/recipe/recipe.component';
//import { RecipesComponent } from './shared/recipes/recipes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  pageTitle: string = 'Home';
  fromFooter(pageTitle: string) {
    this.pageTitle = pageTitle;
  }

  recipeImage: string = "assets/images/recipes/stuffed.portobellos.png";
  recipeName: string = "Stuffed Portobellos";
  recipePdf: string = "assets/pdf/Stuffed.Portobellos.pdf";
  recipeDescription: string =  "Stuffed Portobellos are hearty, and can be a meal unto themselves. Make them as a side dish or for a satisfying low-fat dinner."

  recipes = [
    {
      "recipeId": 1,
      "recipeName": "Stuffed Portobellos",
      "description": "Stuffed Portobellos are hearty, and can be a meal unto themselves. Make them as a side dish or for a satisfying low-fat dinner.",
      "categoryFilter": "dinner side-dish",
      "starRating": 3.2,
      "imageUrl": "assets/images/recipes/stuffed.portobellos.png",
      "pdfUrl": "assets/pdfs/Stuffed.Portobellos.pdf"
    },
    {
      "recipeId": 2,
      "recipeName": "Grilled Salmon and Vegetables",
      "description": "There is nothing quite like Grilled Salmon and Vegetables. We catch a lot of salmon on the Columbia River, and I tell you that boat we got last year has really paid off. When you catch a big salmon and filet it, it will keeo in the freezer up to 10 months if you pack with a seal-a-meal. If you can't get fresh-caught salmon, farmed salmon sold in grocery stores can be really good. The key to this recipe, is don't overcook the salmon. Take off before you think it's done, because it keeps on cooking until it cools down.",
      "categoryFilter": "dinner",
      "starRating": 5.0,
      "imageUrl": "assets/images/recipes/salmon.veggies.jpg",
      "pdfUrl": "assets/pdfs/Grilled.Salmon.and.Veggies.pdf"
    }
  ]

}
