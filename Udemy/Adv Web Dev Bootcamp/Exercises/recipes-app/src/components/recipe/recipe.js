import React, { Component } from "react";

class Recipe extends Component {
    render () {
        const {title} = this.props;
        const ingredients = this.props.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
        ))
        return (
            <div>
                <div>
                   Recipe {title} 
                </div>
                <ul>
                    {ingredients}
                </ul>
            </div>
        )
    }
}

export default Recipe;
