import React, { Component } from 'react';
import uri from './api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: 0,
    }
  }


  componentDidMount() {
    fetch(uri)
      .then(response => Promise.all([response, response.json()]))
      .then(([res, success]) => {
        this.setState({ randomNumber: success.result._id })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to modclima</h1>
          {this.state.randomNumber}
        </header> 
      </div>
    );
  }
}

export default App;
