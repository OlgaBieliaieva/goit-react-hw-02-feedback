import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <section className="appContainer">
        <Feedback text="Please leave feedback" data={this.state}></Feedback>
      </section>
    );
  }
}

export default App;
