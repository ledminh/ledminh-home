import React from 'react';
import styled from 'styled-components';

const hover = `&:hover {
  color: black;
  background-color: #e5e3e3;
  box-shadow: 0 0 15px white;
}`;

const Cell = styled.span`
  border-radius: 100px;
  ${props => (props.children !== ` `)? hover : ``}
`;


export default Cell;
