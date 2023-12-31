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
    error?: string;
    searchResults?: Cocktail[];
}

export interface CocktailApiResponse {
    drinks: Cocktail[];
}

export interface DrinkResponse {
    drinks: Cocktail[];
}
