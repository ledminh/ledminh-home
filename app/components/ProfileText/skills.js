import React from 'react';
import styled from 'styled-components';

import H1 from './h1';

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
      <H1 current_profile={current_profile}>SKILLS</H1>
  </Style>
);

export default Skills;
