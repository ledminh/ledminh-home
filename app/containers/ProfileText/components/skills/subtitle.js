import styled from 'styled-components';
import React from 'react';

import {skills_subtitle} from '../../messages';

const Style = styled.div`
  font-size: 12px;
  font-weight: bold;
  width: 70%;
  margin: auto;
  margin-top: 10px;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
`;

const Subtitle = (props) => (
  <Style>
      {skills_subtitle}
  </Style>
);
export default Subtitle;
