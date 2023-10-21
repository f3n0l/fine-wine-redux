import { configureStore } from "@reduxjs/toolkit";
import cocktailsReducer from "../features/cocktailSlice";

const store = configureStore({
    reducer: {
        cocktails: cocktailsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export default store;
