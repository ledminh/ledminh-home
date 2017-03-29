import React from 'react';
import styled from 'styled-components';

import {
  HIDE,
  BOLD,
  NOW
} from './constants';


const Frame = styled.div`
  position: absolute;
  right: 0px;
  width: 155px;
  height: 250px;
  background-color: ${(props) => (props.state === BOLD)? `rgba(20,43,91, .7)` : `rgba(20,43,91, .4)`};
  transform-origin: right top;
  transform: rotate(40deg);
  cursor: pointer;
  transition: opacity .4s, background-color .4s;

  opacity: ${(props) => (props.state !== HIDE)? 1 : 0};

  @media screen and (max-width: 700px) {
    position: relative;
    width: 50%;
    height: 150px;
    transform: none;
    opacity: 1;
    background-color: ${(props) => (props.state === HIDE)? `transparent` : ((props.state === BOLD)? `rgba(20,43,91, .7)` : `rgba(20,43,91, .4)`)};
    z-index: 0;
  }
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0%, -50%) rotate(-40deg);
  color: white;
  font-weight: bold;
  transition: font-size .4s;
  font-size: ${(props) => (props.state === BOLD)? `25px` : `20px`};

  @media screen and (max-width: 700px){
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
