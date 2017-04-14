/**
*
* Navigation
*
*/

import React from 'react';
import styled from 'styled-components';

import cuid from 'cuid';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {switchMenu} from './actions';

import messages from './messages';

import Button from './button';
import MenuSmallScreen from './menu-smallscreen';

const Frame =  styled.div`
  position: fixed;
  top: 70px;
  left: 0px;
  width: 100%;
  height: 40px;
  padding-left: 5px;
  background-color: gray;

  z-index: 1000;
`;

class Navigation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Frame>
          {messages.buttons.map((button, i) => <Button key={i} link={button.link}>{button.title.toUpperCase()}</Button>)}
          <Button key={cuid()} smallscreen onClick={this.props.menuOnClick}>MENU</Button>
        </Frame>
        <MenuSmallScreen display={this.props.smallscreen_menu}/>
      </div>
    );
  }
}


Navigation.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  menuOnClick: React.PropTypes.func
};

const mapStateToProps = createStructuredSelector({

});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    menuOnClick: () => dispatch(switchMenu())

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
