import React, { Component } from "react";

class App extends Component {
  constructor() {
    super()
    this.state = {
      peopleInSpace: []
    }
  }
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((resp) => resp.json())
      .then(data=> this.setState({peopleInSpace: data.people}))
    }


  render() {
    return (
      <div>
        <h1> People in Space: </h1>
        {this.state.peopleInSpace.map(person=> <p>{person.craft} - {person.name}</p>)}
      </div>
    )
  }
}

export default App;
