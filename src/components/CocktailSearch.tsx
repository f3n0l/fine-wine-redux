import React, { useState } from "react";

type Drink = {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    [key: string]: string; // This allows us to access other properties without being explicit about them.
};

type DrinkResponse = {
    drinks: Drink[];
};

const CocktailSearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [results, setResults] = useState<Drink[]>([]);

    const searchByName = async () => {
        const response = await fetch(`/searchByName/${searchTerm}`);
        const data: DrinkResponse = await response.json();
        setResults(data.drinks || []);
    };

    const searchByFirstLetter = async () => {
        const response = await fetch(`/listByFirstLetter/${searchTerm}`);
        const data: DrinkResponse = await response.json();
        setResults(data.drinks || []);
    };

    const searchByIngredient = async () => {
        const response = await fetch(`/searchIngredient/${searchTerm}`);
        const data: DrinkResponse = await response.json();
        setResults(data.drinks || []);
    };

    const getRandomCocktail = async () => {
        const response = await fetch("/randomCocktail");
        const data: DrinkResponse = await response.json();
        setResults([data.drinks[0]]);
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
                {results.map((drink) => (
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
