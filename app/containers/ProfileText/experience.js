import React from 'react';
import styled from 'styled-components';

import {
    SECTION_EXPERIENCE
} from 'containers/HomePage/constants';

const hidden = `
  display: none;
`;


const show = `
  display: block;
`;

const Style = styled.div`
    ${(props) => (props.current_section === SECTION_EXPERIENCE)? show : hidden}
`;

const Experience = ({current_profile, current_section}) => (
  <Style current_section={current_section}>
      Experiences
  </Style>
);

export default Experience;
