/*
 *
 * Contact
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectContact from './selectors';

import MenuBar from './menu-bar';


const Frame = styled.div`
  position: fixed;
  top: 10px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 0;
  background-color: black;

`;

export class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="::: CONTACT - LEDMINH HOME :::"
          meta={[
            { name: 'description', content: 'My Contact Information' },
            { name: 'keywords', content: 'mail, linkedin, github, freeCodeCamp' },
            { name: 'author', content: 'Minh Le' },
          ]}
        />
        <Frame>
            <MenuBar />
        </Frame>
      </div>
    );
  }
}

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Contact: makeSelectContact(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
