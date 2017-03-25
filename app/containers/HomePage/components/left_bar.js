import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;

    height: 100%;
    width: 200px;

    padding: 10px;

    
    display: inline-block;
    @media screen and (max-width: 700px) {
        display: none;
    }

`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
`;

const LeftBar = ({children}) => (
    <Frame>
        <Content>
            {children}
        </Content>
    </Frame>
);

export default LeftBar;
