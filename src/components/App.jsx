import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    console.log(this.state);
    const { title } = e.target;
    this.setState(prevState => ({
      [title]: prevState[title] + 1,
    }));
  };

  render() {
    return (
      <main className="appContainer">
        <Section text="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
          ></FeedbackOptions>
        </Section>
        <Section text="Statistics">
          {Object.values(this.state).some(value => value > 0) ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.good + this.state.neutral + this.state.bad}
              positivePercentage={
                (this.state.good * 100) /
                (this.state.good + this.state.neutral + this.state.bad)
              }
            ></Statistics>
          ) : (
            <Notification text="There is no feedback"></Notification>
          )}
        </Section>
      </main>
    );
  }
}

export default App;
