import { Cocktail } from "./Cocktails";

export interface CocktailsState {
    searchResults: Cocktail[];
    cocktails: Cocktail[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}
export interface RootState {
    cocktails: CocktailsState;
}
