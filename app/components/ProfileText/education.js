import React from 'react';
import styled from 'styled-components';

import {
    SECTION_EDUCATION
} from 'containers/HomePage/constants';

const hidden = `
  display: none;
`;


const show = `
  display: block;
`;

const Style = styled.div`
    ${(props) => (props.current_section === SECTION_EDUCATION)? show : hidden}
`;

const Education = ({current_profile, current_section}) => (
  <Style current_section={current_section}>
      Education
  </Style>
);

export default Education;
