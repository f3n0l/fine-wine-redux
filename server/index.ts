import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 5000;

const corsOptions = {
    origin: "http://localhost:5000",
};

app.use(cors(corsOptions));

app.get("/", (request, response) => {
    response.send("Hello, World!");
});
// Search cocktail by name
app.get("/searchByName/:name", async (request, response) => {
    try {
        const apiResponse = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${request.params.name}`
        );
        response.json(apiResponse.data);
    } catch (error) {
        response.status(500).json({ message: "Error fetching data." });
    }
});

// List all cocktails by first letter
app.get("/listByFirstLetter/:letter", async (request, response) => {
    try {
        const apiResponse = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${request.params.letter}`
        );
        response.json(apiResponse.data);
    } catch (error) {
        response.status(500).json({ message: "Error fetching data." });
    }
});

// Search ingredient by name
app.get("/searchIngredient/:name", async (request, response) => {
    try {
        const apiResponse = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${request.params.name}`
        );
        response.json(apiResponse.data);
    } catch (error) {
        response.status(500).json({ message: "Error fetching data." });
    }
});

// Lookup full cocktail details by id
app.get("/lookupCocktail/:id", async (request, response) => {
    try {
        const apiResponse = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${request.params.id}`
        );
        response.json(apiResponse.data);
    } catch (error) {
        response.status(500).json({ message: "Error fetching data." });
    }
});

// Lookup a random cocktail
app.get("/api/randomCocktail", async (request, response) => {
    try {
        const apiResponse = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/random.php`
        );
        response.json(apiResponse.data);
        console.log(apiResponse.data.drinks[0]);
    } catch (error) {
        response.status(500).json({ message: "Error fetching data." });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

// Path: client/src/App.tsx
