import React from 'react';

import styled from 'styled-components';

const normalButton = `
    display: inline-block;
    @media screen and (max-width: 700px) {
        display: none;
    }
`;

const smallScreenButton = `
    display: none;
    @media screen and (max-width: 700px) {
        position: absolute;
        left: 50%;
        top: 50%
        transform: translate(-50%, -50%);
        display: inline-block;

    }
`
const Style = styled.div`
  height: 100%;
  padding: 8px;
  font-size: 17px;
  font-weight: bold;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    border-bottom: 4px solid #752b2b;
  }
  ${props => props.smallscreen? smallScreenButton : normalButton}
`;

const Button = ({children, smallscreen, menuOnClick, link}) => (
  <Style smallscreen={smallscreen} onClick={smallscreen? menuOnClick : (e) => location.assign(link)}>
      {children}
  </Style>
);


export default Button;
