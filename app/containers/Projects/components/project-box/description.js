import React from 'react';
import styled from 'styled-components';

import {
  PROJECT_BOX__NORMAL,
  PROJECT_BOX__HOVER,
  PROJECT_BOX__LARGE
} from 'containers/Projects/constants';

/******************
* WRAPPER
*******************/
const Wrapper_normal = `
  background-color: #c4c4c4;
`;

const Wrapper_hover = `
  background-color: #a2a1e2;
`;

const Wrapper_large = `
  background-color: #d0d0d8;
  border-bottom: 1px solid black;
`;

const Wrapper = styled.div`
    padding: 5px;
    ${props => (props.css_state === PROJECT_BOX__NORMAL)? Wrapper_normal : ``}
    ${props => (props.css_state === PROJECT_BOX__HOVER)? Wrapper_hover : ``}
    ${props => (props.css_state === PROJECT_BOX__LARGE)? Wrapper_large : ``}
`;

const Title = styled.div`
    font-weight: bold;
    border-bottom: 1px solid black;
`;

const Content = styled.div`
    font-size: 14px;
`

const Description = ({text, css_state}) => (
  <Wrapper css_state={css_state}>
      <Title>Description</Title>
      <Content>{css_state === PROJECT_BOX__LARGE? text.full : text.short}</Content>
  </Wrapper>
);

export default Description;
