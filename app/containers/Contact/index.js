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
import {makeSelectCurrentClicked, makeSelectIndicatorLeft} from './selectors';

import {click} from './actions';

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
            <MenuBar buttonOnClick={this.props.buttonOnClick}
                      current_clicked={this.props.current_clicked}
                      indicator_left={this.props.indicator_left}/>
        </Frame>
      </div>
    );
  }
}

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
  buttonOnClick: PropTypes.func,

  current_clicked: PropTypes.string,
  indicator_left: PropTypes.string
};

const mapStateToProps = createStructuredSelector({
    current_clicked: makeSelectCurrentClicked(),
    indicator_left: makeSelectIndicatorLeft()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    buttonOnClick : (name, left) => dispatch(click(name, left))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
