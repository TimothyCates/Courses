import './App.css';
import Recipe from './components/recipe/recipe'

function App() {
    return (
        <div>
            <Recipe
                title='Pasta'
                ingredients={['Pasta sauce', 'Water', 'Noods']}
                steps='Mix it all together fam'
                img='https://www.thechunkychef.com/wp-content/uploads/2019/09/One-Pot-Spaghetti-feat.jpg'
            />
        </div>
    );
}

export default App;
