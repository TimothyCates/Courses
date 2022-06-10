import './App.css';
import Recipe from './components/recipe/recipe'

function App() {
    return (
        <div>
            <Recipe
                title='Pasta'
                ingredients={['Pasta sauce', 'Water', 'Noods']}
                steps='Mix it all together fam'
                img='https://www.archanaskitchen.com/images/archanaskitchen/10-Brands/DelMonte-KidsRecipes/Spaghetti_Pasta_Recipe_In_Creamy_Tomato_Sauce_-_Kids_Recipes_Made_With_Del_Monte-3_400.jpg'
            />
        </div>
    );
}

export default App;
