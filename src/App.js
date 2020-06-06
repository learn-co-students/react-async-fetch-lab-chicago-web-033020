// create your App component here
import React, { Component } from 'react'

export class App extends Component {

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            console.log(data.people)
        })
    }

    render() {
        return (
            <div>
                <h1>Hi</h1>
            </div>
        )
    }
}

export default App
