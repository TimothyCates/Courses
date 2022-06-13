import { Component } from 'react'
import PropTypes from 'prop-types'
import Recipe from '../recipe/recipe'
import './recipe-list.css'

class recipeList extends Component {

    static defaultProps = {
        recipes: []
    }
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            steps: PropTypes.string.isRequired,
            img: PropTypes.string,
            ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        }))
    }
    render () {
        const recipes = this.props.recipes.map((recipe, index) => (
            <Recipe key={ index } {...recipe}/>
        ));

        return (
            <div className="recipe-list">
                {recipes.length > 0 ? recipes : <h2>No Recipes! Add one by clicking the link up on the top!</h2>}
            </div>
        )
    }
}

export default recipeList
