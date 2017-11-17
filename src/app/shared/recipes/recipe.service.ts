import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { IRecipe } from './recipe';

@Injectable()
export class RecipeService {
    //private _recipeUrl = 'http://my-json-server.typicode.com/techsith/';
    //private _recipeUrl = 'api/recipes.json';
  // private _recipeUrl = 'http://my-json-server.typicode.com/LoriLevy/recipes';
    private _recipeUrl = 'https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/';

    constructor(private http: HttpClient) {}
    //constructor(private _http: Http) {}
    // getRecipes(): Observable<IRecipe[]> {
    //     return this._httpClient.get(this._recipeUrl)
    //         .map((response: Response) => <IRecipe[]> response.json())
    //         .do(data => console.log('All: ' +  JSON.stringify(data)))
    //         .catch(this.handleError);
    // }
    getProfile() {
        this.http.get(`http://my-json-server.typicode.com/LoriLevy/recipes`)
        .subscribe(
          (data: any[]) => {
            console.log(data)
            if (data.length) {
            //   this.name = data[0].name;
            //   this.age = data[0].age;
            //   this.found = true;
            }
          },
          (err) => {
            console.log(err);
          }
        )
      }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    // getRecipes(): IRecipe[] {
    //     return [ 
    //         {
    //             "recipeId": 1,
    //             "recipeName": "Stuffed Portobellos",
    //             "description": "Stuffed Portobellos are hearty, and can be a meal unto themselves. Make them as a side dish or for a satisfying low-fat dinner.",
    //             "categoryFilter": "dinner sides",
    //             "starRating": 3.2,
    //             "imageUrl": "assets/images/recipes/stuffed.portobellos.png",
    //             "pdfUrl": "assets/pdfs/Stuffed.Portobellos.pdf"
    //         },
    //         {
    //             "recipeId": 2,
    //             "recipeName": "Grilled Salmon and Vegetables",
    //             "description": "The key to this recipe, is don't overcook the salmon. It continues to cook while it's cooling down.",
    //             "categoryFilter": "dinner",
    //             "starRating": 5.0,
    //             "imageUrl": "assets/images/recipes/salmon.veggies.jpg",
    //             "pdfUrl": "assets/pdfs/Grilled.Salmon.and.Veggies.pdf"
    //         },
    //         {
    //             "recipeId": 3,
    //             "recipeName": "Super Extra Low-Fat Cranberry Cookies",
    //             "description": "Grind cereal and graham crackers in a food processor crumbs make your own butter out of prunes. Nobody ever believes they are low-fat!",
    //             "categoryFilter": "dessert",
    //             "starRating": 4.8,
    //             "imageUrl": "assets/images/recipes/self-cookies.jpg",
    //             "pdfUrl": "assets/pdfs/Self.Cookies.pdf"
    //         },
    //         {
    //             "recipeId": 4,
    //             "recipeName": "Baked Yam Chips",
    //             "description": "Although it takes time to make these chips, it's worth it! Make alot because they go really fast! But remember, for you, everything in moderation.",
    //             "categoryFilter": "sides",
    //             "starRating": 4.8,
    //             "imageUrl": "assets/images/recipes/baked-yam-chips.jpg",
    //             "pdfUrl": "assets/pdfs/Baked.Yam.Chips.pdf"
    //         },
    //         {
    //             "recipeId": 5,
    //             "recipeName": "Chicken Sandwich with Fruit",
    //             "description": "Great lunch or late afternoon snack. Quick to make; easy take to work. Get your knife!",
    //             "categoryFilter": "lunch",
    //             "starRating": 3.8,
    //             "imageUrl": "assets/images/recipes/chicken-sandwich-fruit.png",
    //             "pdfUrl": "assets/pdfs/Chicken.Sandwich.With.Fruit.pdf"
    //         },
    //         {
    //             "recipeId": 6,
    //             "recipeName": "Cranberry Snap Brownies",
    //             "description": "These rich and gooey bar cookies aren't really brownies! I modified a 123 Snap Brownie recipe, replacing all the high-fat ingredients with low-fat or fat-free ingredients. So Good!",
    //             "categoryFilter": "dessert",
    //             "starRating": 4.0,
    //             "imageUrl": "assets/images/recipes/cranberry-snap-brownies.png",
    //             "pdfUrl": "assets/pdfs/Cranberry.Snap.Brownies.pdf"
    //         },
    //         {
    //             "recipeId": 7,
    //             "recipeName": "Delicious Fat-Free Cornbread",
    //             "description": "Marie Callendar's half-order contains 10 grams of fat! Jiffy Cornbread has 4.5 grams of fat per serving! This recipe tastes wonderful, and is nearly fat-free!",
    //             "categoryFilter": "sides",
    //             "starRating": 4.5,
    //             "imageUrl": "assets/images/recipes/fat-free-cornbread.jpg",
    //             "pdfUrl": "assets/pdfs/Delicious.Fatfree.Cornbread.pdf"
    //         },
    //         {
    //             "recipeId": 8,
    //             "recipeName": "Fat-free Potatoes",
    //             "description": "Potatoes are very satisfying. This recipe says to bake the potatoes but, you can also Steam them them a day or two ahead.  Store them in the fridge in a deep SnapWare container.",
    //             "categoryFilter": "breakfast sides",
    //             "starRating": 4.6,
    //             "imageUrl": "assets/images/recipes/ff-potatoes.png",
    //             "pdfUrl": "assets/pdfs/Fatfree.Potatoes.pdf"
    //         },
    //         {
    //             "recipeId": 9,
    //             "recipeName": "Fruit Sundae",
    //             "description": "Feel like celebrating! Guilt-free (aka Fat Free!)but use a small bowl. The bowl you see here is just 5 inches in diameter, so smaller than a cereal or pasta bowl.",
    //             "categoryFilter": "lunch dessert",
    //             "starRating": 4.0,
    //             "imageUrl": "assets/images/recipes/fruit-sundae.png",
    //             "pdfUrl": "assets/pdfs/Fruit-Sundae.pdf"
    //         },
    //         {
    //             "recipeId": 10,
    //             "recipeName": "Parsnips and Pork",
    //              "description": "A very, very satisfying meal, and so delicious, but Seconds are a no-no. Eat something every few hours.", 
    //              "categoryFilter": "dinner",
    //             "starRating": 4.0,
    //             "imageUrl": "assets/images/recipes/baked-yam-chips.jpg",
    //             "pdfUrl": "assets/pdfs/Parsnips.and.Pork.pdf"
    //         },
    //         {
    //             "recipeId": 11,
    //             "recipeName": "Roasted Winter Vegetable Soup",
    //             "description": "If you like the sweet, smooth taste of winter root vegetables, you will savor this soup. It's creamy without any added dairy products. Also, this meal is high in Vitamins A and C.",
    //             "categoryFilter": "dinner lunch sides",
    //             "starRating": 4.0,
    //             "imageUrl": "assets/images/recipes/Roasted.Winter.Veggie.Soup.jpg",
    //             "pdfUrl": "assets/pdfs/Roasted.Winter.Veggie.Soup.pdf"
    //         },
    //         {
    //             "recipeId": 12,
    //             "recipeName": "Spaghetti Squash and Salad",
    //             "description": "Spaghetti.Squash.and.Salad ",
    //             "categoryFilter": "dinner lunch",
    //             "starRating": 3.6,
    //             "imageUrl": "assets/images/recipes/squash-n-salad.png",
    //             "pdfUrl": "assets/pdfs/Spaghetti.Squash.and.Salad.pdf"
    //         },
    //         {
    //             "recipeId": 13,
    //             "recipeName": "Spinach and Egg White Omlette Burrito",
    //             "description": "Great way to start the day! Look for the Canteca Flour Tortillas, as they are almost fat-free.",
    //             "categoryFilter": "all breakfast",
    //             "starRating": 4.0,
    //             "imageUrl": "assets/images/recipes/breakfast-burrito.jpg",
    //             "pdfUrl": "assets/pdfs/Spinach.EggWhite.Burrito.pdf"
    //         },
    //         {
    //             "recipeId": 14,
    //             "recipeName": "Super Low-Fat Hummus",
    //             "description": "Hummus from a grocery store has at least 2.5 grams of fat per Two Tablespoons. Not this hummus! Be generous when you season your fat-free hummus. Enjoy!",
    //             "categoryFilter": "sides",
    //             "starRating": 4.9,
    //             "imageUrl": "assets/images/recipes/hummus.png",
    //             "pdfUrl": "assets/pdfs/Super.Lowfat.Hummus.pdf"
    //         },
    //         {
    //             "recipeId": 15,
    //             "recipeName": "Super Low-Fat Potato Salad",
    //             "description": "Less than one gram of fat per serving. How is this possible? There are no egg yolks or mayonnaise, which is where the majority of the fat comes from in potato salad. In this recipe, we provide you with an option replace even the low-fat mayo with fat-free plain yogurt, and some fat-free sour cream. Don't foget to spice it up and garnish it with the tips of green onions just before serving. The more, the merrier!",
    //             "categoryFilter": "sides",
    //             "starRating": 4.7,
    //             "imageUrl": "assets/images/recipes/Super.Lowfat.Potato.Salad.jpg",
    //             "pdfUrl": "assets/pdfs/Super.Lowfat.Potato.Salad.pdf"
    //         }
    //     ]
    // }
}