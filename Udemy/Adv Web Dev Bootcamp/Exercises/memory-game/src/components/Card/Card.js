import { Component } from 'react'
import './Card.css'

class Card extends Component {
  frontStyle = {
    backgroundColor: this.props.color,
    transform: "rotateY(180deg)"
  }


  render() {
    let { handleClick, animation, state, id } = this.props
    return (
      <div className='Card' onClick={() => { handleClick(id) }}>
        <div
          className={`Card-Content ${animation}`}
        >
          <div className='Card-Front' style={this.frontStyle} >
          </div>
          <div className='Card-Back'>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
