/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';

import LightUp from 'components/LightUp';

import Wrapper from './wrapper';
import Text from './text';

import messages from './messages';

function Header() {
  return (
    <Wrapper>
        <Text center>
            <LightUp>{messages.header}</LightUp>
        </Text>
    </Wrapper>
  );
}

Header.propTypes = {

};

export default Header;
