// store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cocktailsReducer from "../features/cocktailSlice";
import searchReducer from "../features/searchSlice"; // Import your searchReducer

const rootReducer = combineReducers({
    cocktails: cocktailsReducer,
    search: searchReducer, // Include the search reducer
});

const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export default store;
export type RootState = ReturnType<typeof rootReducer>; // Define RootState
