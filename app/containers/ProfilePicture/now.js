import React from 'react';
import styled from 'styled-components';

import {
  HIDE,
  BOLD
} from './constants';

const Frame = styled.div`
  position: absolute;
  right: 0px;
  width: 300px;
  height: 260px;
  background-color: ${(props) => (props.state === BOLD)? `rgba(10,10,10, .7)` : `rgba(10,10,10, .4)`}
  transform-origin: right top;
  transform: rotate(-50deg);
  cursor: pointer;
  transition: opacity .4s, background-color .4s;

  opacity: ${(props) => (props.state !== HIDE)? 1 : 0};

  @media screen and (max-width: 700px){
    top: 0px;
    width: 50%;
    height: 150px;
    opacity: 1;
    background-color: ${(props) => (props.state === HIDE)? `transparent` : ((props.state === BOLD)? `rgba(10,10,10, .7)` : `rgba(10,10,10, .4)`)};
    transform: none;
  }

`;

const Text = styled.div`
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0%) rotate(50deg);
  color: white;
  font-weight: bold;

  transition: font-size .4s;

  font-size: ${(props) => (props.state === BOLD)? `25px` : `20px`};

  @media screen and (max-width: 700px){
    top: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    font-size: 40px;
    color: ${(props) => (props.state === HIDE)? `#828282` : ((props.state === BOLD)? `white` : `#a5a5a5`)}
  }
`;

const Now = ({state, onMouseEnter, onMouseLeave, onClick}) => (
  <Frame state={state} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
      <Text state={state}>NOW</Text>
  </Frame>
);


export default Now;
