export interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate: string | null;
    strTags: string | null;
    strVideo: string | null;
    strCategory: string;
    strIBA: string | null;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;

    strDrinkThumb: string;
    strIngredient1: string;
    strMeasure1: string;
}

export interface CocktailApiResponse {
    drinks: Cocktail[];
}
