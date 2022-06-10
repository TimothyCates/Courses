import React, { Component } from "react";
import './recipe.css'

class Recipe extends Component {
    render() {
        const { title, img, steps } = this.props;
        const ingredients = this.props.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
        ))
        return (
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img alt={title} src={img} />
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
