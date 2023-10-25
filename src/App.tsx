import "./App.css";
import CocktailsList from "./components/CocktailList";
import CocktailSearch from "./components/CocktailSearch";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
    return (
        <div>
            <Provider store={store}>
                <CocktailSearch />
                <CocktailsList />{" "}
            </Provider>
        </div>
    );
}

export default App;

//add store
