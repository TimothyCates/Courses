import { Component } from 'react'
import Nav from './components/Nav/Nav'
import Form from './components/Form/Form.js'
import "./App.css"

const gameState = {
  guessing: 0,
  won: 1,
  lost: 2
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      flag: "",
      country: "",
      countries: [],
      choices: [],
      currentGuess: "",
      state: gameState.guessing
    }
  }
  
  getCountries = () => {
    const api = "https://restcountries.com/v3.1/all"
    fetch(api)
    .then(data => (data.json()))
    .then(countries => {
      countries = countries.map((country) => {
        return {
          name: country.name.common,
          flag: country.flags.svg
        }
      })
      this.setState({countries: countries}, this.newGame)
    })
  }
  
  getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)]
  }

  newGame = () => {
    let country = this.getRandom(this.state.countries)
    let choices = [country.name]
    for(let i = 1; i < 4; i++){
      let newChoice
      do
        newChoice = this.getRandom(this.state.countries).name
      while(choices.includes(newChoice))
      choices.push(newChoice)
    }
    this.setState({country: country.name, flag: country.flag, choices: choices, state: gameState.guessing, currentGuess: ""})
  }

  componentDidMount(){
    this.getCountries()
  }

  changeGuess = (guess) => {
    console.log(guess)
    this.setState({currentGuess: guess})
  }

  guess = () => {
    if(this.state.state === gameState.guessing){
      if(this.state.currentGuess == this.state.country){
        this.setState({state: gameState.won})
      }else{
        this.setState({state: gameState.lost})
      }
    }else{
      this.newGame();
    }
  }
  render () {
    let  {country, choices, currentGuess} = this.state
    let gameState = this.state.state
    let guess = this.guess
    let changeGuess = this.changeGuess
    let button = "Guess"
    if(this.state.state != 0)
      button = "Next"
    return (
      <>
      <Nav />
      <Form answer={country} 
            currentGuess={currentGuess}
            choices={choices}
            state={gameState}
            guess={guess}
            changeGuess={changeGuess}
            button={button}
      />
      <div className="image">
        <img src={this.state.flag}/>
      </div>
      </>
    )
  }
}

export default App
