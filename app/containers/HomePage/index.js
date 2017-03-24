/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
<<<<<<< HEAD
import Header from 'components/Header';
=======

import Header from 'components/Header';

import messages from './messages';
>>>>>>> 1e947d383e879b01bfdb46953b5e5651de540a68

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
<<<<<<< HEAD
        <Header />        
=======
          <Header />
>>>>>>> 1e947d383e879b01bfdb46953b5e5651de540a68
      </div>
    );
  }
}
