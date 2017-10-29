import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']

})

export class RecipeComponent implements OnInit {
  @Input() recipeImage: string;
  @Input() recipeName: string;
  @Input() recipeDescription: string;
  @Input() recipePdf: string;
  @Input() recipeCategory;
  @Input() filter;
  //show = false;
  showRecipe: boolean = false;

  constructor() { 
    
  }

  ngOnInit() {
    //console.log("The Recipe filter is: ", this.filter);
    //  if(this.recipeCategory.indexOf(this.filter).toString() !== -1 ){
    //     this.show = true;
      
    }
      //console.log ("test", this.recipeCategory.indexOf(this.filter));
      //console.log ("which filter: ", this.filter);

     // console.log ("TypeOf is: ", this.recipeCategory[0]);  }
}
