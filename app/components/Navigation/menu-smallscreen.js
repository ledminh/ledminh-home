import React from 'react';
import styled from 'styled-components';

import messages from './messages';

const Frame = styled.div`
  position: fixed;
  top: 110px;
  left: 50%;
  width: 300px;
  transform: translate(-50%, 0%);

  background-color: rgba(142, 142, 142, .7);
  padding: 10px;

  z-index: 1000;

`;

const Content = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
`;


const Button = styled.div`
    background-color: rgba(250,250,250, .6);
    border-radius: 10px;

    text-align: center;
    font-weight: bold;

    margin-bottom: 7px;
    cursor: pointer;

    &:hover {
      background-color: rgba(255,255,255, .9);
    }
`;

const MenuSmallScreen = () => (
  <Frame>
    <Content>
      {
        messages.buttons.map((button, i) => <Button key={i} onClick={() => location.assign(button.link)}>{button.title.toUpperCase()}</Button>)
      }
    </Content>
  </Frame>
);


export default MenuSmallScreen
