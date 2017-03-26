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
  background-color: ${(props) => (props.state === BOLD)? `rgba(20,43,91, .7)` : `rgba(20,43,91, .4)`}
  transform-origin: right top;
  transform: rotate(-50deg);
  cursor: pointer;
  transition: opacity .4s, background-color .4s;

  opacity: ${(props) => (props.state !== HIDE)? 1 : 0}


`;

const Text = styled.div`
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0%) rotate(50deg);
  color: white;
  font-weight: bold;

  transition: font-size .4s;

  font-size: ${(props) => (props.state === BOLD)? `25px` : `20px`}
`;

const Then = ({state, onMouseEnter, onMouseLeave}) => (
  <Frame state={state} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Text state={state}>THEN</Text>
  </Frame>
);


export default Then;
