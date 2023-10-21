import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults, searchResults } from "../features/cocktailSlice";
import { RootState } from "../types/ReduxState";
import { Cocktail } from "../types/Cocktails";

type DrinkResponse = {
    drinks: Cocktail[];
};

const CocktailSearch: React.FC = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const searchResults = useSelector(
        (state: RootState) => state.cocktails.searchResults
    );

    const searchByName = async () => {
        try {
            const response = await fetch(`/searchByName/${searchTerm}`);
            const data: DrinkResponse = await response.json();
            dispatch(
                setSearchResults.actions.setSearchResults(data.drinks || [])
            );
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const searchByFirstLetter = async () => {
        try {
            const response = await fetch(`/listByFirstLetter/${searchTerm}`);
            const data: DrinkResponse = await response.json();
            dispatch(
                setSearchResults.actions.setSearchResults(data.drinks || [])
            );
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const searchByIngredient = async () => {
        try {
            const response = await fetch(`/searchIngredient/${searchTerm}`);
            const data: DrinkResponse = await response.json();
            dispatch(
                setSearchResults.actions.setSearchResults(data.drinks || [])
            );
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const getRandomCocktail = async () => {
        try {
            const response = await fetch("/api/randomCocktail");
            const responseData = await response.text();

            if (responseData.trim() === "") {
                console.error("Empty Response");
                return;
            }

            const data = JSON.parse(responseData);
            console.log("Parsed Data:", data);
        } catch (error) {
            console.error("Fetch Error:", error);
        }
    };

    return (
        <div>
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search term..."
            />
            <button onClick={searchByName}>Search by Name</button>
            <button onClick={searchByFirstLetter}>List by First Letter</button>
            <button onClick={searchByIngredient}>Search by Ingredient</button>
            <button onClick={getRandomCocktail}>Get Random Cocktail</button>

            <ul>
                {searchResults.map((drink) => (
                    <li key={drink.idDrink}>
                        <h3>{drink.strDrink}</h3>
                        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CocktailSearch;
