import React from 'react';
import styled from 'styled-components';

import {
  EMAIL,
  LINKEDIN,
  GITHUB,
  FREECODECAMP
} from './constants';

const BOTTOM = 50,
      HEIGHT = 70,
      WIDTH = 400;


/****************
* FUNCTIONS
*****************/
const onClick = (index, buttonOnClick) => (e) =>  buttonOnClick(index, e.target.offsetLeft + 30);

/****************
* COMPONENTS
*****************/
const Frame = styled.div`
  position: fixed;
  bottom: ${BOTTOM + 'px'};
  left: 50%;

  transform: translate(-50%, 0%);

  background: linear-gradient(gray, white 90%, gray);
  width: ${WIDTH + 'px'};
  height: ${HEIGHT + 'px'};

  border-radius: 40000px;
  z-index: 1000px;
`;

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

const Button = styled.div`
    display: inline-block;
    margin-right: 15px;

    padding: 5px;

    cursor: pointer;

    & > img {
      height: 50px;
      width: 50px;
    }

`;


/*****************
* INDICATOR
******************/
const Indicator = styled.div`
  position: fixed;
  bottom: 0px;
  left: ${props => (props.left) };
  height: 80px;
  width: 70px;
  z-index: 10000;

  transition: left .2s;

  border-top: 10px solid #8e4343;
  background-color: rgba(209, 209, 209, .7);
`;

const MenuBar = ({buttonOnClick, indicator_left}) => (
  <div>
      <Frame>
        <Content>
          <Button onClick={onClick(0, buttonOnClick)}><img src="https://www.ledminh.com/imgs/about-me/email.svg"/></Button>
          <Button onClick={onClick(1, buttonOnClick)}><img src="https://www.ledminh.com/imgs/linkedin.png"/></Button>
          <Button onClick={onClick(2, buttonOnClick)}><img src="https://www.ledminh.com/imgs/github.png"/></Button>
          <Button onClick={onClick(3, buttonOnClick)}><img src="https://www.ledminh.com/imgs/about-me/free-code-camp.jpg"/></Button>
        </Content>
        <Indicator left={indicator_left}/>
      </Frame>
  </div>
)

export default MenuBar;
