import { Component } from 'react'

class App extends Component {
  componentDidMount() {
    fetch('/api/todos')
      .then(data => data.json())
      .then(data => console.log(data))
  }
  render() {
    return (
      <div>
        {this.props.test}
      </div>
    ) 
  }
}

export default App
