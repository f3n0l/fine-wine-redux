import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCocktails = createAsyncThunk(
    "cocktails/fetchCocktails",
    async () => {
        const response = await axios.get("/api/cocktails");
        return response.data;
    }
);

const cocktailsSlice = createSlice({
    name: "cocktails",
    initialState: { cocktails: [], status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCocktails.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCocktails.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.cocktails = action.payload;
            })
            .addCase(fetchCocktails.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default cocktailsSlice.reducer;
