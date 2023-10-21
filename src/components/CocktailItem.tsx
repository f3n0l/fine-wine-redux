import React from "react";
import { Cocktail } from "../types/Cocktails";

interface CocktailItemProps {
    cocktail: Cocktail;
}

const CocktailItem: React.FC<CocktailItemProps> = ({ cocktail }) => {
    return (
        <div className="cocktail-item">
            <h2>{cocktail.strDrink}</h2>
            <img
                className="img"
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
            />
            <p>{cocktail.strInstructions}</p>
            <p>{cocktail.strGlass}</p>
            <p>{cocktail.strCategory}</p>
            <div>
                {Array.from({ length: 15 }).map((_, index) => {
                    const ingredientKey = `strIngredient${
                        index + 1
                    }` as keyof Cocktail;
                    const ingredient = cocktail[ingredientKey];

                    if (
                        typeof ingredient === "string" &&
                        ingredient.length > 0
                    ) {
                        return <p key={index}>{ingredient}</p>;
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
};

export default CocktailItem;
