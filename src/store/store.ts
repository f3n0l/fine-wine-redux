import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cocktailsReducer from "../features/cocktailSlice";
import searchReducer from "../features/searchSlice";

const rootReducer = combineReducers({
    cocktails: cocktailsReducer,
    search: searchReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export default store;
export type RootState = ReturnType<typeof rootReducer>;
