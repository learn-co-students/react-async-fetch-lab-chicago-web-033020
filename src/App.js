// create your App component here
import React, { Component } from 'react'


export class App extends Component {
  constructor() {
    super()
    this.state = {
      peopleInSpace: []
    }
  }
  render() {
    return (
      <div>
        {this.state.peopleInSpace.map(people => people.name)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        peopleInSpace: data.people
      })
    })
  }
}

export default App

