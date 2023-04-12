import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

class FeedbackItems extends Component {
  static propTypes = {
    data: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }),
  };

  getBtnColor = fbType => {
    switch (fbType) {
      case 'good':
        return 'green';
      case 'neutral':
        return '#e0a607';
      case 'bad':
        return 'red';
      default:
        return 'red';
    }
  };
  render() {
    const feedbackBtns = Object.keys(this.props.data);

    return (
      <ul className={css.btnList}>
        {feedbackBtns.map(item => {
          const btnId = shortid.generate();

          return (
            <li className="feedbackBtn" key={btnId}>
              <button
                className={css.button}
                type="button"
                id={btnId}
                fb-type={item}
                style={{ backgroundColor: this.getBtnColor(item) }}
              >
                {item.toUpperCase()}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default FeedbackItems;
