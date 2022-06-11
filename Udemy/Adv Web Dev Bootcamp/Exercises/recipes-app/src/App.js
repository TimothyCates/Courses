import './App.css';
import Navbar from "./components/navbar/navbar"
import RecipeList from "./components/recipe-list/recipe-list"

const NavLink = [
    {
        src: "#NewRecipe",
        text: "New Recipe"
    },
    {
        src: "./",
        text: "Home"
    },
    {
        src: "#About",
        text: "About"
    },
    {
        src: "#Contact",
        text: "Contact Us"
    },
]



function App() {
    return (
        <div>
            <Navbar title="Recipe App" links={NavLink} />
            <RecipeList />
        </div>
    );
}

export default App;
