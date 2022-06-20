import { Component } from 'react'
import "./Nav.css"

class Nav extends Component {
  render () {
    const {resetBoard} = this.props
    return (
      <div className="Nav">
      <span>Matching Game</span> 
      <ul>
      <li onClick={resetBoard}>New Game</li>
      </ul>
      </div>
    )
  }
}

export default Nav
