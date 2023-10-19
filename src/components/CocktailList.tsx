// src/components/CocktailList.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../features/cocktailsSlice";
import { Cocktail } from "../types/Cocktails";
import { RootState } from "../types/ReduxState";
import CocktailItem from "./CocktailItem";

const CocktailsList: React.FC = () => {
    const dispatch = useDispatch();
    const cocktails = useSelector(
        (state: RootState) => state.cocktails.cocktails
    );
    const status = useSelector((state: RootState) => state.cocktails.status);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCocktails());
        }
    }, [status, dispatch]);

    return (
        <div>
            {status === "loading" && <p>Loading...</p>}
            {status === "succeeded" &&
                cocktails.map((cocktail: Cocktail) => (
                    <CocktailItem key={cocktail.idDrink} cocktail={cocktail} />
                ))}
            {status === "failed" && <p>Error loading cocktails.</p>}
        </div>
    );
};

export default CocktailsList;
