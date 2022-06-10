import './App.css';
import Recipe from './components/recipe/recipe'

function App() {
    return (
        <div>
            <Recipe title='Pasta' ingredients={['Pasta sauce', 'Water', 'Noods']} />
        </div>
    );
}

export default App;
