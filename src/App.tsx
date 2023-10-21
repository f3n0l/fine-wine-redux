import "./App.css";
import CocktailsList from "./components/CocktailList";
import CocktailSearch from "./components/CocktailSearch"; // Import the Counter component

function App() {
    return (
        <div>
            <CocktailSearch />
            <CocktailsList />
        </div>
    );
}

export default App;
