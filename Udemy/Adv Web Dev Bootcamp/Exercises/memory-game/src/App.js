import Card from './components/Card/Card'
import Nav from './components/Nav/Nav'
import Color from "./colors"
import { Component } from 'react'

const cardState = {
  faceDown: 0,
  faceUp: 1,
  matching: 2
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      amountOfCards: 10,
      animationTimeout: 1000 //give time for animations to complete
    }
  }

  componentDidMount() {
    this.resetBoard()
  }

  static shuffle(array){
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }}

  copyState = (prev = this.state) => {
    let newState = JSON.parse(JSON.stringify(prev))
    newState.cards.forEach(data => {
      data['handleClick'] = this.handleCardClick
    });
    return newState
  }

  setAll = (cards, state) => {
    cards.forEach((card, index) => {
      cards[index] = {...card, state:state}
    })
  }

  resetBoard = () => {
    let cards = []
    let colors = []
    for(let i = 0; i < this.state.amountOfCards; i+= 2){
      let color = Color.getUnique(colors)
      colors.push(color)
      const defaultData = {
        state: cardState.faceDown,
        color: color,
        handleClick: this.handleCardClick,
      }
      cards.push({...defaultData, id: i})
      cards.push({...defaultData, id: i+1})
    }
    App.shuffle(cards)
    console.log(cards)
    this.setState({cards: cards}, () => {
      setTimeout(() => {
        this.setAll(cards, cardState.matching)
        this.setState({cards: cards}, () => {
          setTimeout(() => {
            this.setAll(cards, cardState.faceDown)
            this.setState({cards: cards})
          }, this.state.animationTimeout + 600)
        })
      }, 300)
    })
  }

  findCardIndex = (cardId, cards) => {
    let index = -1
    cards.forEach((card, i) => {
      if(card.id == cardId)
        index = i
    })
    return index
  }
  
  handleCardClick = (cardId) => {
    let cards = this.copyState.call(this).cards
    let card = cards[this.findCardIndex(cardId, cards)]
    
    //prevent spamming to reveal all cards
    let upCards = cards.filter((curCard) => {
      return curCard.state == cardState.faceUp
    });
    if (upCards.length > 1)
      return

    if (card.state == cardState.faceUp){
      card.state = cardState.faceDown
    }
    else{
      card.state = cardState.faceUp
    }
    this.setState((prev) => {
      prev.cards[this.findCardIndex(cardId, prev.cards)] = card;
      return {cards: prev.cards}
    }, () => {
      setTimeout(() => {
        this.setState((prev) => {
          let match = this.findMatch(prev.cards)
          if(!match[0])
            return {cards: prev.cards}
          if(!match[1]){
            prev.cards.forEach((card, index) => {
              if(card.state != cardState.matching)
                prev.cards[index] = {...card, state: cardState.faceDown}
            })
            return {cards: prev.cards}
          }else{
            match[1].forEach((card) => {
              prev.cards[this.findCardIndex(card.id, prev.cards)] = {...prev.cards[this.findCardIndex(card.id, prev.cards)], state: cardState.matching}
            })
            return {cards: prev.cards}
          }
        })
      }, this.state.animationTimeout + 200)
    })
  }

  findMatch = (cards) => {
    let upCards = cards.filter((curCard) => {
      return curCard.state == cardState.faceUp
    });
    if(upCards.length > 1){
      if (upCards.length == upCards.filter((curCard) => (curCard.color == upCards[0].color)).length){
        return [true, upCards]
      }
        return [true, false]
    }
    return [false]
  }


  render() {
    const cardContainer = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      padding: "30px",
      width: "80%",
      margin: "auto"
    }
    return (
      <>
      <Nav resetBoard={this.resetBoard}/>
      <div style={cardContainer}>
        {
          this.state.cards.map((data, index) => {
            return <Card {...data} key={index} />
          })
        }
      </div >
      </>
    )
  }
}

export default App;
