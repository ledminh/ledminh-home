import React from 'react';
import styled from 'styled-components';


const Frame = styled.div`
  position: absolute;
  right: 0px;
  width: 300px;
  height: 260px;
  background-color: rgba(20,43,91, .7);
  transform-origin: right top;
  transform: rotate(-50deg);
`;

const Text = styled.div`
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0%) rotate(50deg);
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const Then = (props) => (
  <Frame>
      <Text>THEN</Text>
  </Frame>
);


export default Then;
