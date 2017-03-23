import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  color: #c6c6c6;
  font-size: 30px;
  font-weight: bold;

  ${(props) => props.center? `
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0%, -50%);
  ` : ``}

`;

export default Text;
