import React from 'react';
import styled from 'styled-components';

import {
  PROJECT_BOX__NORMAL
} from 'containers/Projects/constants';


const Wrapper = styled.div`
    padding: 5px;
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
      <Content>{text.short}</Content>
  </Wrapper>
);

export default Description;
