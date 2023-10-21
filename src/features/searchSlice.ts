import { createSlice } from "@reduxjs/toolkit";
import { Cocktail } from "../types/Cocktails";

interface SearchState {
    searchResults: Cocktail[];
}

const initialState: SearchState = {
    searchResults: [],
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
    },
});

export const { setSearchResults } = searchSlice.actions;

export default searchSlice.reducer;
