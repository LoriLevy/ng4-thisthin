import { PipeTransform, Pipe } from '@angular/core';
import { IRecipe } from './recipe';

@Pipe({
    name: 'recipeFilter'
})
export class RecipeFilterPipe implements PipeTransform {

    transform(value: IRecipe[], filterBy: string): IRecipe[] {
        //console.log("value is: ", value); // value is athe entire array of recipes
        if(filterBy === "Show All") {
            return value;
        }
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((recipe: IRecipe) =>
            recipe.categoryFilter.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
    
}
