import React from 'react';
import styled from 'styled-components';

import {
  PROJECT_BOX__LARGE
} from 'containers/Projects/constants';

const Wrapper = styled.div`
  position: relative;
  display: ${props => (props.css_state !== PROJECT_BOX__LARGE)? 'none' : 'block'}
  text-align: center;
  padding: 10px;
  height: 50px;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  padding: 5px;
`

const Button = styled.div`
  display: inline-block;
  border: 2px solid black;
  border-radius: 7px;
  padding: 5px;
  margin-left: 5px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    ${props => props.source? 'background-color: #ebedd0' : ''}
    ${props => props.link? 'background-color: #7d83c4' : ''}
    ${props => props.close? 'background-color: #f2d0d0' : ''}
  }
`;


const Buttons = ({css_state, links}) => (
  <Wrapper css_state={css_state}>
    <Content>
        <Button source onClick={() => open(links.source_code)}>SOURCE CODE</Button>
        <Button link onClick={() => open(links.demo)}>LINK/DEMO</Button>
        <Button close >CLOSE</Button>
    </Content>
  </Wrapper>
);

export default Buttons;
