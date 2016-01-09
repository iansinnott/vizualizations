import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import 'normalize.css';
import 'react-fa';

// TDOO: Add font awesome

import s from './App.styl';

// Favicon link is created server-side, this just makes webpack package it
import './favicon.ico';

export const Home = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <div className={s.heading}>
          <h1>Visualizations</h1>
        </div>
      </div>
    );
  },
});

export const NotFound = props => (
  <div className={s.page}>
    <h4>Not found</h4>
  </div>
);

/**
 * NOTE: As of 2015-11-09 react-transform does not support a functional
 * component as the base compoenent that's passed to ReactDOM.render, so we
 * still use createClass here.
 */
export const App = React.createClass({
  propTypes: {
    children: PropTypes.any,
  },
  render() {
    return (
      <div className={s.App}>
        <nav className={s.nav}>
          <IndexLink to='/' activeClassName={s.active}>Home</IndexLink>
          <Link to='/css' activeClassName={s.active}>CSS</Link>
        </nav>
        {this.props.children}
      </div>
    );
  },
});
