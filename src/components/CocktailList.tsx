import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../features/cocktailSlice";
import { Cocktail } from "../types/Cocktails";
import { RootState } from "../types/ReduxState";
import CocktailItem from "./CocktailItem";
import { AppDispatch } from "../store/store";

const CocktailsList: React.FC = () => {
    const cocktails = useSelector((state: RootState) =>
        state.cocktails.searchResults.length > 0
            ? state.cocktails.searchResults
            : state.cocktails.cocktails
    );

    const status = useSelector((state: RootState) => state.cocktails.status);
    const dispatch = useDispatch<AppDispatch>();

    const [searchResults, setSearchResults] = useState<Cocktail[]>([]);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCocktails());
        }
    }, [status, dispatch]);

    return (
        <div>
            {status === "loading" && <p>Loading...</p>}
            {status === "succeeded" &&
                (searchResults.length > 0
                    ? searchResults.map((cocktail: Cocktail) => (
                          <CocktailItem
                              key={cocktail.idDrink}
                              cocktail={cocktail}
                          />
                      ))
                    : cocktails.map((cocktail: Cocktail) => (
                          <CocktailItem
                              key={cocktail.idDrink}
                              cocktail={cocktail}
                          />
                      )))}
            {status === "failed" && <p>Error loading cocktails.</p>}
        </div>
    );
};

export default CocktailsList;

//fix type error
