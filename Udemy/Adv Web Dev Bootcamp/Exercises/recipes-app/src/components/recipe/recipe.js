import React, { Component } from "react";
import PropTypes from 'prop-types'
import './recipe.css'

class Recipe extends Component {
    static defaultProps = {
        title: "Unnamed Recipe",
        img: "./No-Image.svg",
        ingredients: [],
        steps: "Fill out the form correctly!"
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        steps: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

    render() {
        const { title, img, steps } = this.props;
        const ingredients = this.props.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
        ))
        
        const hasImage = (img !== "./No-Image.svg")

        return (
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img alt={title} src={img} className={hasImage ? "" : "no-zoom"}/>
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-card-title">Recipe {title}</h3>
                    <h4>Ingredients:</h4>
                    <ul>
                        {ingredients}
                    </ul>
                    <h4>Instructions:</h4>
                    <p>
                        {steps}
                    </p>
                </div>
            </div>
        )
    }
}

export default Recipe;
