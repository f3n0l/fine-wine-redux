import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Using the globally defined types
import { Cocktail, CocktailApiResponse } from "../types/Cocktails"; // Update the path accordingly

interface CocktailsState {
    cocktails: Cocktail[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: CocktailsState = {
    cocktails: [],
    status: "idle",
    error: null,
};

export const fetchCocktails = createAsyncThunk(
    "cocktails/fetchCocktails",
    async (): Promise<CocktailApiResponse> => {
        const response = await axios.get<CocktailApiResponse>("/api/cocktails");
        return response.data;
    }
);

export const cocktailsSlice = createSlice({
    name: "cocktails",
    initialState,
    reducers: {},
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
                state.error = action.error.message || null; // Use null if message is undefined
            });
    },
});

export default cocktailsSlice.reducer;
