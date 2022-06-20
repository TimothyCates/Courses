import { Component } from 'react'
import './Card.css'

class Card extends Component {

  frontStyle = {
    backgroundColor: this.props.color,
  }

  render() {
    const { handleClick, state, id } = this.props

    let cardContainer = {
      transform: (this.props.state == 0) ? "rotateY(180deg)" : "rotateY(0deg)",
      position: "relative",
      width: "100%",
      height: "100%",
      transformStyle: "preserve-3d",
      transition: "all 1s"
    }

    return (
      <div className='Card' onClick={() => { if (state != 2) { handleClick(id) } }}>
        <div style={cardContainer}>
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
