import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Cocktail, CocktailApiResponse } from "../types/Cocktails";

interface CocktailsState {
    cocktails: Cocktail[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    searchResults: Cocktail[]; // Add this property
}

const initialState: CocktailsState = {
    cocktails: [],
    status: "idle",
    error: null,
    searchResults: [], // Initialize the searchResults property
};

export const fetchCocktails = createAsyncThunk(
    "cocktails/fetchCocktails",
    async (): Promise<CocktailApiResponse> => {
        const response = await fetch("/api/randomCocktail");
        return response.json();
    }
);

export const cocktailsSlice = createSlice({
    name: "cocktails",
    initialState,
    reducers: {
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCocktails.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCocktails.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.cocktails = action.payload.drinks;
            })
            .addCase(fetchCocktails.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || null;
            });
    },
});

// Export a setSearchResults action using createSlice
export const { setSearchResults } = cocktailsSlice.actions;

export default cocktailsSlice.reducer;
