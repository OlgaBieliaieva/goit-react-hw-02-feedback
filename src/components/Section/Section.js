import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

class Section extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    return (
      <section className={css.sectionContainer}>
        <h1 className="sectionTitle">{this.props.text}</h1>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
