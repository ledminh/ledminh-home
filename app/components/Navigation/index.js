/**
*
* Navigation
*
*/

import React from 'react';
import styled from 'styled-components';

import {renderButton} from './utils';
import messages from './messages';

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
          {renderButton(messages.buttons)}
        </Frame>
        <MenuSmallScreen />
      </div>
    );
  }
}


export default Navigation;
