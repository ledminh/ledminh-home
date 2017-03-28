import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;

    display: none;
    @media screen and (max-width: 700px) {
        display: block;
    }
`;

const TopStrip = styled.div`
    background-color: #2f3030;
    height: 10px;
    width: 100%;
`;

const TopBar = ({children}) => (
  <Wrapper>
      <TopStrip />
      {children}
  </Wrapper>
);

export default TopBar;
