import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  position: fixed;
  top: 50px;
  left: 50px;

  background: linear-gradient(gray, white 90%, gray);
  width: 400px;
  height: 70px;

  border-radius: 40000px;
  z-index: 1000px;
`;

const Button = styled.div`
    display: inline-block;
    margin-right: 15px;
    
    padding: 5px;

    & > img {
      height: 50px;
      width: 50px;
    }
`;


const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

const MenuBar = (props) => (
  <Frame>
    <Content>
        <Button><img src="https://www.ledminh.com/imgs/about-me/email.svg"/></Button>
        <Button><img src="https://www.ledminh.com/imgs/linkedin.png"/></Button>
        <Button><img src="https://www.ledminh.com/imgs/github.png"/></Button>
        <Button><img src="https://www.ledminh.com/imgs/about-me/free-code-camp.jpg"/></Button>
    </Content>
  </Frame>
)

export default MenuBar;
