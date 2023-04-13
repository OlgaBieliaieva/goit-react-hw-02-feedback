import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

class Notification extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    return (
      <>
        <p className={css.notification}>{this.props.text}</p>
      </>
    );
  }
}

export default Notification;
