import { Component } from 'react'
import List from './components/list/list'
import Form from './components/form/form'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      inputText: ""
    }
  }

  updateInput = (value) => {
    this.setState({inputText: value})
  }

  addTodo = (todo) => {
    this.setState((prev) => {
      return {items: [...prev.items, todo]}
    })
  }

  render () {
    return (
      <>
        <h1>Todo App - React</h1>
        <Form 
          setInput={this.updateInput} 
          addTodo={this.addTodo} 
          inputValue={this.state.inputText} 
          subText="Save"
        />
        <List items={this.state.items} />
      </>
    )
  }
}

export default App
