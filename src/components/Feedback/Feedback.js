import React, { Component } from 'react';
import FeedbackItems from './FeedbackItems';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

class Feedback extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={css.feedbackContainer}>
        <h1 className="sectionTitle">{this.props.text}</h1>
        <FeedbackItems data={this.props.data}></FeedbackItems>
      </div>
    );
  }
}

export default Feedback;
