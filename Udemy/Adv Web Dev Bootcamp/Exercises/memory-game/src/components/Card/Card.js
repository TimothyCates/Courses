import { Component } from 'react'
import './Card.css'

class Card extends Component {
  frontStyle = {
    backgroundColor: this.props.color, 
    transform: "rotateY(180deg)"
  }

  handleClick = () => {
    if(this.props.disabled)
      return
    if(!this.props.faceup){
      this.props.changeState(this.props.id, {dynamicClass: "flipOver"})
    }else{
      this.props.changeState(this.props.id, {dynamicClass: "flipBack"})
    }
  } 

  handleAnimation = () => {
    this.props.changeState(this.props.id, {
        faceup: !this.props.faceup,
        dynamicClass: !this.props.faceup ? "flipped" : ""
      }, () => {
        this.props.checkMatch(this.props.id)
      })
  }

  render () {
    return (
      <div className='Card' onClick={this.handleClick}>
        <div 
          className={`Card-Content ${this.props.dynamicClass}`} 
          onAnimationEnd={this.handleAnimation}
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
