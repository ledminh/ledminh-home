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
import {makeSelectIndicatorLeft,
        makeSelectContactData,
        makeSelectCurrentIndex,
        makeSelectSmallScreenMenu} from './selectors';


import {click, requestData} from './actions';

import Header from 'components/Header';
import Navigation from 'components/Navigation';

import MenuBar from './menu-bar';
import Screen from './screen';

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
  componentWillMount(){
      this.props.requestData();
  }

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
        <Header />
        <Navigation smallscreen_menu={this.props.smallscreen_menu}/>
        <Frame>
            <Screen data={this.props.contact_data.slice(0, this.props.current_index + 1)}/>
            <MenuBar buttonOnClick={this.props.buttonOnClick}
                    indicator_left={this.props.indicator_left}/>
        </Frame>
      </div>
    );
  }
}

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
  buttonOnClick: PropTypes.func,

  indicator_left: PropTypes.string,
  contact_data: PropTypes.array,
  smallscreen_menu: React.PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
    indicator_left: makeSelectIndicatorLeft(),
    current_index: makeSelectCurrentIndex(),
    contact_data: makeSelectContactData(),
    smallscreen_menu: makeSelectSmallScreenMenu()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    buttonOnClick : (index, left) => dispatch(click(index, left)),
    requestData : () => dispatch(requestData())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
