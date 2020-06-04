import React from 'react'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      people: null
    }
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(json => this.setState({people: json}))
  }

  render(){
    return <p>div</p>
  }
}

export default App
