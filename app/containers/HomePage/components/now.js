import React from 'react';
import styled from 'styled-components';


const Frame = styled.div`
  position: absolute;
  right: 0px;
  width: 155px;
  height: 250px;
  background-color: rgba(10,10,10, .4);
  transform-origin: right top;
  transform: rotate(40deg);
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0%, -50%) rotate(-40deg);

  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const Now = (props) => (
  <Frame>
      <Text>NOW</Text>
  </Frame>
);


export default Now;
