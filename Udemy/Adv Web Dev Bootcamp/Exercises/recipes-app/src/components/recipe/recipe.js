import React, { Component } from "react";

class Recipe extends Component {
    render () {
        const {title, img, steps} = this.props;
        const ingredients = this.props.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
        ))
        return (
            <div>
                <div>
                   Recipe {title} 
                </div>
                <img alt={title} src={img}/>
                <ul>
                    {ingredients}
                </ul>
                <p>
                    {steps} 
                </p>
            </div>
        )
    }
}

export default Recipe;
