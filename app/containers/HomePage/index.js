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
import Helmet from 'react-helmet';

import Header from 'components/Header';
import Navigation from 'components/Navigation';


import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="::: LEDMINH HOME :::"
          meta={[
            { name: 'description', content: 'My Portfolio Website' },
            { name: 'keywords', content: 'React, Redux, Node.js, JavaScript, mongoDB, freeCodeCamp, Express.js'},
            { name: 'author', content: 'Minh Le'}
          ]}
        />
        <Header />
        <Navigation />
        
      </div>
    );
  }
}
