import React from "react";
import { Cocktail } from "../types/Cocktails";

interface CocktailItemProps {
    cocktail: Cocktail;
}

const CocktailItem: React.FC<CocktailItemProps> = ({ cocktail }) => {
    return (
        <div className="cocktail-item">
            <h2>{cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <p>{cocktail.strInstructions}</p>
            {/* You can further iterate through ingredients and measures to display them */}
        </div>
    );
};

export default CocktailItem;
