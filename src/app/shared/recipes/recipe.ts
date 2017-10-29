/* Defines the recipe entity */
export interface IRecipe {
    recipeId: number;
    recipeName: string;
    description: string;
    categoryFilter: string;
    starRating: number;
    imageUrl: string;
    pdfUrl: string;
}