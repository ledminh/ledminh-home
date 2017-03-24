/**
*
* Navigation
*
*/

import React from 'react';

import Wrapper from './wrapper';

import {renderButton} from './utils';
import messages from './messages';

class Navigation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
          {renderButton(messages.buttons)}
      </Wrapper>
    );
  }
}


export default Navigation;
