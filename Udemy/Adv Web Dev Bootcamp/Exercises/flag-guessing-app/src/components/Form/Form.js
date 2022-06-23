import { Component } from 'react'
import "./Form.css"

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.guess();
  }

  handleRadio = (e) => {
    this.props.changeGuess(e.currentTarget.value) 
  }

  renderOptions = (countries) => {
    return countries.map((country) => {
      return <div className='input'>  
        <input 
                type="radio"
                name={ country } 
                value={country}
                checked={this.props.currentGuess === country}
                onChange={this.handleRadio}
            />
        <label htmlFor={country}
              onClick={
                () => {let e = {currentTarget: {value: country}}; this.handleRadio(e)}
              }
        >
          {country}
        </label>
        </div>
    })
  }

  isPlaying = () => {
    if(this.props.state == 0)
      return this.renderOptions(this.props.choices);
    else if (this.props.state == 1)
      return "Correct!"
    else
      return "Incorrect! Correct Answer: " + this.props.answer
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        {
          this.isPlaying()
        }
        <button>{this.props.button}</button>
      </form>
    )
  }
}

export default Form 
