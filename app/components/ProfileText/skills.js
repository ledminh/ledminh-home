import React from 'react';
import styled from 'styled-components';

import {
    SECTION_SKILLS
} from 'containers/HomePage/constants';

const hidden = `
  display: none;
`;


const show = `
  display: block;
`;

const Style = styled.div`
    ${(props) => (props.current_section === SECTION_SKILLS)? show : hidden}
`;

const Skills = ({current_profile, current_section}) => (
  <Style current_section={current_section}>
      Skill
  </Style>
);

export default Skills;
