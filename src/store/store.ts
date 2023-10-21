import { configureStore } from "@reduxjs/toolkit";
import cocktailsReducer from "../features/cocktailSlice";

import { AnyAction } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../types/ReduxState";

const store = configureStore({
    reducer: {
        cocktails: cocktailsReducer,
    },
});

export type AppDispatch = typeof store.dispatch &
    ThunkDispatch<RootState, unknown, AnyAction>;
export default store;
