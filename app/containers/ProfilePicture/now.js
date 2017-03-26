import React from 'react';
import styled from 'styled-components';

import {
  HIDE,
  BOLD
} from './constants';

const Frame = styled.div`
  position: absolute;
  right: 0px;
  width: 155px;
  height: 250px;
  background-color: ${(props) => (props.state === BOLD)? `rgba(10,10,10, .7)` : `rgba(10,10,10, .4)`}
  transform-origin: right top;
  transform: rotate(40deg);
  cursor: pointer;
  transition: opacity .4s, background-color .4s;

  opacity: ${(props) => (props.state !== HIDE)? 1 : 0}

`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0%, -50%) rotate(-40deg);

  color: white;
  font-weight: bold;

  transition: font-size .4s;
  font-size: ${(props) => (props.state === BOLD)? `25px` : `20px`}
`;

const Now = ({state, onMouseEnter, onMouseLeave}) => (
  <Frame state={state} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Text state={state}>NOW</Text>
  </Frame>
);


export default Now;
